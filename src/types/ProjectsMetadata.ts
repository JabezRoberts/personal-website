import type { MDXComponents } from "mdx/types";

export type ProjectMetadata = {
  title: string;
  description?: string;
  type?: string;
  role?: string;
  timeline?: string;
  website?: string;
  // ← add any other frontmatter fields you use
};

export type ProjectModule = {
  default: React.ComponentType<{ components?: MDXComponents }>;
  metadata: ProjectMetadata;
};