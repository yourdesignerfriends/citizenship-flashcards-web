import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./page.module.css";

// I define this page's title and description so browsers and search engines can identify and summarize it.
// I export them as metadata so Next.js can add them to the page's document head.
export const metadata = {
  title: "Civics Questions and Answers | US Citizenship Flashcards",
  description:
    "Prepare for the U.S. naturalization civics test with confidence. Every question you study brings you closer to your goal.",
};

export default function HomePage() {
  return (
    <>
      {/* I use the shared PageHero to introduce my homepage with its label, title, and description. */}
      <PageHero
        kicker="U.S. Citizenship Flashcards"
        title="Civics Questions and Answers"
        description="Study questions for the U.S. naturalization civics test."
      />
      <section className={styles.motivation} aria-label="Start studying">
        <Image
          className={styles.illustration}
          src="/happy.png"
          alt="Illustration of a student preparing for the civics test and moving toward the U.S. Capitol"
          width={1152}
          height={768}
          sizes="(max-width: 699px) 100vw, 50vw"
        />
        <div className={styles.message}>
          <p>
            Every question you study today is a step closer to your goal. Prepare
            for the naturalization test with confidence. You can do it!
          </p>
          <Link className={styles.button} href="/categories">
            Study now
          </Link>
        </div>
      </section>
    </>
  );
}