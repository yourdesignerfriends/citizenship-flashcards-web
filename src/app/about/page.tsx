// I import Next.js Image to render and optimize my profile photo.
import Image from "next/image";
// I reuse the PageHero component to keep this page consistent with the rest of my app.
import PageHero from "@/components/PageHero/PageHero";
// I import this page's local styles for the profile layout and photo.
import styles from "./page.module.css";

// I define this page's title and description so browsers and search engines can identify and summarize it.
// I export them as metadata so Next.js can add them to the page's document head.
export const metadata = {
  title: "The Developer | US Citizenship Flashcards",
  description: "Meet Analina, the developer behind US Citizenship Flashcards.",
};

// I make this function the main React component for my About page.
export default function AboutPage() {
  return (
    <>
      {/* I use the shared PageHero to introduce this page with a label, title, and description. */}
      <PageHero
        kicker="About"
        title="The Developer"
        description="A little about the person behind US Citizenship Flashcards."
      />
      {/* I group my photo and story together so I can arrange and style them as one section. */}
      <div className={styles.profile}>
        {/* I use my profile photo with descriptive alt text and responsive display sizes. */}
        <Image
          className={styles.photo}
          src="/profile.png"
          alt="Portrait of Analina"
          width={1024}
          height={1536}
          sizes="(max-width: 699px) 12rem, 16rem"
        />
        {/* I share a short introduction in my own words and place it beside or below the photo. */}
        <p className={styles.story}>
          Hi everyone, I&apos;m Analina. I enjoy programming, but above all, I
          love serving and helping others. I created this app to support people
          as they prepare for the U.S. Citizenship Civics Test.
        </p>
      </div>
    </>
  );
}
