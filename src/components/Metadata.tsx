import { useEffect } from "react";
import { site } from "../data/site";

interface MetadataProps {
  title?: string;
  description?: string;
}

export function Metadata({ title, description = site.description }: MetadataProps) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : site.title;

    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = description;
  }, [description, title]);

  return null;
}
