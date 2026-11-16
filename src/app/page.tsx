import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Card from "@/components/Card/Card";
import { getCategories } from "@/lib/data/categories";
import styles from "./page.module.css";

// I render this page for each request so I can show the latest database categories.
export const dynamic = "force-dynamic";

export default async function Home() {
  // I load the categories before rendering the page so I can display them below.
  // I use null to represent a failed query; on success, I store the category list here.
  let categories: Awaited<ReturnType<typeof getCategories>> | null = null;

  try {
    categories = await getCategories();
  } catch (error) {
    console.error("I couldn't load the homepage categories:", error);
  }

  return (
    <>
      <Navbar categories={categories ?? []} />

      <main className={styles.main}>
        <div className={styles.content}>
          <header className={styles.intro}>
            <p className={styles.version}>U.S. Citizenship Civics Test</p>
            <h1 className={styles.introTitle}>Civics Questions and Answers</h1>
            <p className={styles.introDescription}>
              Study questions for the U.S. naturalization civics test.
            </p>
          </header>

          <section aria-labelledby="categories-heading">
            <h2 className={styles.sectionTitle} id="categories-heading">
              Categories
            </h2>

            <div className={styles.cardList}>
              {categories === null ? (
                <p className={styles.emptyState} role="alert">
                  We couldn&apos;t load categories right now. Please try again
                  later.
                </p>
              ) : categories.length > 0 ? (
                categories.map((category) => (
                  <Card
                    key={category.id}
                    href={`/flashcards/${category.slug}`}
                    title={category.name}
                    description={`${category._count.questions} questions`}
                  />
                ))
              ) : (
                <p className={styles.emptyState}>
                  No categories are available yet.
                </p>
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
