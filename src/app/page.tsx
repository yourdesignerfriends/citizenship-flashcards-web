import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./page.module.css";

export const metadata = {
  title: "Civics Questions and Answers | US Citizenship Flashcards",
  description:
    "Prepare for the U.S. naturalization civics test with confidence. Every question you study brings you closer to your goal.",
};

export default function HomePage() {
  return (
    <>
      <PageHero
        kicker="U.S. Citizenship Flashcards"
        title="Civics Questions and Answers"
        description="Study questions for the U.S. naturalization civics test."
      />
      <section className={styles.motivation} aria-label="Start studying">
        <div className={styles.message}>
          <p>
            Every question you study today is a step closer to your goal. Prepare
            for the naturalization test with confidence. You can do it!
          </p>
          <Link className={styles.button} href="/categories">
            Study now
          </Link>
        </div>
        <Image
          className={styles.illustration}
          src="/happy.png"
          alt="Illustration of a student preparing for the civics test and moving toward the U.S. Capitol"
          width={1152}
          height={768}
          sizes="(max-width: 699px) 100vw, 50vw"
        />
      </section>
    </>
  );
}