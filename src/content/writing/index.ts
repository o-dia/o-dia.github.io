import type { WritingEntry } from "../../types/content";

type WritingModule = {
  default: WritingEntry["Component"];
  metadata: WritingEntry["metadata"];
};

const modules = import.meta.glob<WritingModule>("./*.mdx", { eager: true });

export const writingEntries: WritingEntry[] = Object.values(modules)
  .map((module) => ({
    Component: module.default,
    metadata: module.metadata,
  }))
  .sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
  );

export const publishedWritingEntries = writingEntries.filter(
  (entry) => !entry.metadata.draft,
);

export function findWritingBySlug(slug: string | undefined) {
  return publishedWritingEntries.find((entry) => entry.metadata.slug === slug);
}
