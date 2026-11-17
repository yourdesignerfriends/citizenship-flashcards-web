import PageHero from "@/components/PageHero/PageHero";
import styles from "./page.module.css";

export const metadata = {
  title: "The Developer | US Citizenship Flashcards",
  description: "Meet Analina, the developer behind US Citizenship Flashcards.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="The Developer"
        description="A little about the person behind US Citizenship Flashcards."
      />
      <p className={styles.story}>
        Hi everyone, I&apos;m Analina. I enjoy programming, but above all, I love
        serving and helping others. I created this app to support people as
        they prepare for the U.S. Citizenship Civics Test.
      </p>
    </>
  );
}
