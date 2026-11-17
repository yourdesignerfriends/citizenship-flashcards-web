import Card from "@/components/Card/Card";
import PageHero from "@/components/PageHero/PageHero";
import { getCategories } from "@/lib/data/categories";
import styles from "./page.module.css";

export const metadata = {
  title: "Categories | US Citizenship Flashcards",
  description: "Explore U.S. citizenship civics test question categories.",
};

export default async function CategoriesPage() {
  // I load the categories before rendering the page so I can display them below.
  // I use null to represent a failed query; on success, I store the category list here.
  let categories = null;

  try {
    categories = await getCategories();
  } catch (error) {
    console.error("I couldn't load the categories page:", error);
  }

  return (
    <>
      <PageHero
        kicker="U.S. Citizenship Flashcards"
        title="Categories"
        description="Study questions for the U.S. naturalization civics test."
      />
      <div className={styles.cardList}>
        {categories === null ? (
          <p className={styles.emptyState} role="alert">
            We couldn&apos;t load categories right now. Please try again later.
          </p>
        ) : categories.length === 0 ? (
          <p className={styles.emptyState}>
            There are no categories yet.
          </p>
        ) : (
          categories.map((category) => (
            <Card
              key={category.id}
              href={`/flashcards/${category.slug}`}
              title={category.name}
              description={`${category._count.questions} questions`}
            />
          ))
        )}
      </div>
    </>
  );
}
