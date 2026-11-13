import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

const categories = [
  {
    id: "american-government",
    title: "American Government",
    count: 57,
    icon: "government",
    color: "navy",
  },
  {
    id: "american-history",
    title: "American History",
    count: 30,
    icon: "history",
    color: "red",
  },
  {
    id: "integrated-civics",
    title: "Integrated Civics",
    count: 13,
    icon: "civics",
    color: "blue",
  },
] as const;

type CategoryIconName = (typeof categories)[number]["icon"];
type CategoryColor = (typeof categories)[number]["color"];

function CategoryIcon({ name }: { name: CategoryIconName }) {
  if (name === "government") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 9h18L12 4 3 9Z" />
        <path d="M5 10v8m4-8v8m6-8v8m4-8v8M3 20h18" />
      </svg>
    );
  }

  if (name === "history") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 4.5A2.5 2.5 0 0 1 8.5 2H19v17H8.5A2.5 2.5 0 0 0 6 21.5v-17Z" />
        <path d="M6 5v16m2-2h11M9 6h6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9h17M4 15h16M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4V4.5Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.content}>
          <section className={styles.section} aria-labelledby="categories-heading">
            <h1 className={styles.sectionTitle} id="categories-heading">
              Categories
            </h1>

            <div className={styles.cardList}>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/flashcards?category=${category.id}`}
                  className={styles.card}
                >
                  <span
                    className={`${styles.iconBox} ${styles[category.color as CategoryColor]}`}
                  >
                    <CategoryIcon name={category.icon} />
                  </span>
                  <span className={styles.cardContent}>
                    <span className={styles.cardTitle}>{category.title}</span>
                    <span className={styles.cardDescription}>
                      {category.count} questions
                    </span>
                  </span>
                  <span className={styles.arrow}>
                    <ChevronIcon />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className={styles.section} aria-labelledby="saved-heading">
            <h2 className={styles.sectionTitle} id="saved-heading">
              Saved Cards
            </h2>

            <div className={styles.cardList}>
              <Link href="/bookmarks" className={styles.card}>
                <span className={`${styles.iconBox} ${styles.red}`}>
                  <BookmarkIcon />
                </span>
                <span className={styles.cardContent}>
                  <span className={styles.cardTitle}>My Saved Cards</span>
                  <span className={styles.cardDescription}>7 saved questions</span>
                </span>
                <span className={styles.arrow}>
                  <ChevronIcon />
                </span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
