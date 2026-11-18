import Image from "next/image";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./page.module.css";

// I define this page's title and description so browsers and search engines can identify and summarize it.
// I export them as metadata so Next.js can add them to the page's document head.
export const metadata = {
  title: "The Developer | US Citizenship Flashcards",
  description: "Meet Analina, the developer behind US Citizenship Flashcards.",
};

export default function AboutPage() {
  return (
    <>
      {/* I use the shared PageHero to introduce my homepage with its label, title, and description. */}
      <PageHero
        kicker="About"
        title="The Developer"
        description="A little about the person behind US Citizenship Flashcards."
      />
      <div className={styles.profile}>
        <Image
          className={styles.photo}
          src="/profile.png"
          alt="Portrait of Analina"
          width={1024}
          height={1536}
          sizes="(max-width: 699px) 12rem, 16rem"
        />
        <p className={styles.story}>
          Hi everyone, I&apos;m Analina. I enjoy programming, but above all, I
          love serving and helping others. I created this app to support people
          as they prepare for the U.S. Citizenship Civics Test.
        </p>
      </div>
    </>
  );
}
