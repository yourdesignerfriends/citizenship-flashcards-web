import type { Metadata } from "next";

// I keep my site's name and description in one place so I can reuse them consistently.
export const siteConfig = {
  name: "US Citizenship Flashcards",
  description:
    "Study for the U.S. Citizenship Civics Test with interactive flashcards.",
};

// I map my shared site details to Next.js metadata, including the information used when pages are shared.
export const siteMetadata: Metadata = {
  title: `${siteConfig.name} — Study for the Civics Test`,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
  },
};
