import PageHero from "@/components/PageHero/PageHero";

export const metadata = {
  title: "Civics Questions and Answers | US Citizenship Flashcards",
  description: "Study questions for the U.S. naturalization civics test.",
};

export default function HomePage() {
  return (
    <PageHero
      kicker="U.S. Citizenship Flashcards"
      title="Civics Questions and Answers"
      description="Study questions for the U.S. naturalization civics test."
    />
  );
}