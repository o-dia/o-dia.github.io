import { lazy, Suspense, type PropsWithChildren } from "react";
import { Header } from "./Header";

const ShaderBackground = lazy(() =>
  import("./ShaderBackground").then((module) => ({
    default: module.ShaderBackground,
  })),
);

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-graphite text-ink">
      <Suspense fallback={null}>
        <ShaderBackground />
      </Suspense>
      <Header />
      <main className="relative z-10 mx-auto min-h-screen max-w-6xl px-5 pb-20 pt-28 sm:px-8">
        {children}
      </main>
    </div>
  );
}
