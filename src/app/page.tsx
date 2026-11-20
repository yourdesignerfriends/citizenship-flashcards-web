// I use Next.js Link to navigate to the categories page without a full page reload.
import Link from "next/link";
// I use Next.js Image to size and optimize the homepage illustration.
import Image from "next/image";
// I reuse the shared hero component to introduce the homepage.
import PageHero from "@/components/PageHero/PageHero";
// I import the styles that are specific to this page.
import styles from "./page.module.css";

// I define this page's title and description so browsers and search engines can identify and summarize it.
// I export them as metadata so Next.js can add them to the page's document head.
export const metadata = {
  title: "Civics Questions and Answers | US Citizenship Flashcards",
  description:
    "Prepare for the U.S. naturalization civics test with confidence. Every question you study brings you closer to your goal.",
};

// I define the component that renders the homepage content.
export default function HomePage() {
  return (
    <>
      {/* I use the shared PageHero to introduce my homepage with its label, title, and description. */}
      <PageHero
        kicker="U.S. Citizenship Flashcards"
        title="Civics Questions and Answers"
        description="Study questions for the U.S. naturalization civics test."
      />
      {/* I group the motivational message, illustration, and study link into one section. */}
      <section className={styles.motivation} aria-label="Start studying">
        {/* I describe the illustration for screen readers and provide its dimensions and responsive sizes. */}
        <Image
          className={styles.illustration}
          src="/happy.png"
          alt="Illustration of a student preparing for the civics test and moving toward the U.S. Capitol"
          width={1152}
          height={768}
          sizes="(max-width: 699px) 100vw, 50vw"
        />
        {/* I encourage visitors to study and give them a clear path to the categories. */}
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