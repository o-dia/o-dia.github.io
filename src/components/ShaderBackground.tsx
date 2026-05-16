import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const fragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform float uIntensity;
  uniform vec2 uMouse;
  uniform vec2 uResolution;

  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.55;
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p);
      p *= 2.03;
      amplitude *= 0.48;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv;
    vec2 aspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
    vec2 p = (uv - 0.5) * aspect;
    vec2 mouse = (uMouse - 0.5) * vec2(0.26, 0.18);

    float slow = uTime * 0.035;
    float field = fbm((p + mouse) * 2.8 + vec2(slow, -slow * 0.7));
    float contour = smoothstep(0.025, 0.0, abs(fract(field * 7.0 + slow) - 0.5));
    float horizon = smoothstep(0.78, 0.05, length(p - vec2(-0.16, 0.05)));
    float ember = smoothstep(0.62, 0.05, length(p - vec2(0.42, -0.18)));

    vec3 base = vec3(0.082, 0.066, 0.058);
    vec3 warm = vec3(0.88, 0.50, 0.25);
    vec3 moss = vec3(0.45, 0.52, 0.38);
    vec3 ink = vec3(0.95, 0.91, 0.84);

    vec3 color = base;
    color += warm * horizon * 0.16 * uIntensity;
    color += moss * ember * 0.10 * uIntensity;
    color += ink * contour * 0.045 * uIntensity;
    color += warm * pow(max(0.0, 1.0 - length(p + mouse)), 3.0) * 0.05 * uIntensity;

    float vignette = smoothstep(1.08, 0.18, length(p));
    color *= vignette;

    gl_FragColor = vec4(color, 1.0);
  }
`;

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

function ShaderPlane({ reducedMotion }: { reducedMotion: boolean }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const pointer = useRef(new THREE.Vector2(0.5, 0.5));
  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uIntensity: { value: reducedMotion ? 0.32 : 0.84 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
    }),
    [reducedMotion, size.height, size.width],
  );

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.set(
        event.clientX / window.innerWidth,
        1 - event.clientY / window.innerHeight,
      );
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state) => {
    const material = materialRef.current;
    if (!material) return;

    material.uniforms.uTime.value = reducedMotion ? 0.0 : state.clock.elapsedTime;
    material.uniforms.uIntensity.value =
      window.innerWidth < 768 ? (reducedMotion ? 0.22 : 0.48) : reducedMotion ? 0.32 : 0.84;
    material.uniforms.uMouse.value.lerp(pointer.current, 0.045);
    material.uniforms.uResolution.value.set(size.width, size.height);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

export function ShaderBackground() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        dpr={reducedMotion ? 0.75 : [0.75, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <ShaderPlane reducedMotion={reducedMotion} />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(243,238,231,0.08),transparent_32%),linear-gradient(180deg,rgba(21,17,15,0.2),rgba(21,17,15,0.72)_70%,#15110f)]" />
    </div>
  );
}
