import type { Metadata } from "next";

export const siteConfig = {
  name: "US Citizenship Flashcards",
  description:
    "Study for the U.S. Citizenship Civics Test with interactive flashcards.",
};

export const siteMetadata: Metadata = {
  title: `${siteConfig.name} — Study for the Civics Test`,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
  },
};
