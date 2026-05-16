/// <reference types="vite/client" />

declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { WritingMetadata } from "./types/content";

  export const metadata: WritingMetadata;
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
