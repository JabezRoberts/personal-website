export type ProjectType = {
  slug: string;
  title: string;
  description: string;       // short version for cards (truncate if needed)
  coverImage: string;
  tags: string[];
  // Optional: only if you want to show them on the list page
  type?: string;
  role?: string;
  timeline?: string;
};