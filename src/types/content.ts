import type { ComponentType } from "react";

export type WritingTheme = "Systems" | "Notes" | "Fieldwork";

export interface WritingMetadata {
  title: string;
  description: string;
  date: string;
  theme: WritingTheme;
  draft?: boolean;
  slug: string;
}

export interface WritingEntry {
  Component: ComponentType;
  metadata: WritingMetadata;
}

export interface ProjectEntry {
  title: string;
  description: string;
  status: "Active" | "Exploration" | "Archived";
  href?: string;
  tags: string[];
}
