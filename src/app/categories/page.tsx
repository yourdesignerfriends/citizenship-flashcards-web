import Card from "@/components/Card/Card";
import PageHero from "@/components/PageHero/PageHero";
import { getCategories } from "@/lib/data/categories";
import styles from "./page.module.css";

// I define this page's title and description so browsers and search engines can identify and summarize it.
// I export them as metadata so Next.js can add them to the page's document head.
export const metadata = {
  title: "Categories | US Citizenship Flashcards",
  description: "Explore U.S. citizenship civics test question categories.",
};

// I make this page asynchronous so I can wait for the category data before rendering.
export default async function CategoriesPage() {
  // I load the categories before rendering the page so I can display them below.
  // I use null to represent a failed query; on success, I store the category list here.
  let categories = null;

  // I catch query errors so I can log them and show the page's error message.
  try {
    categories = await getCategories();
  } catch (error) {
    console.error("I couldn't load the categories page:", error);
  }

  return (
    <>
      {/* I use the shared PageHero to introduce my categories page. */}
      <PageHero
        kicker="U.S. Citizenship Flashcards"
        title="Categories"
        description="Study questions for the U.S. naturalization civics test."
      />
      <div className={styles.cardList}>
        {/* I use null to distinguish a failed query from a successful query with no results. */}
        {categories === null ? (
          // I alert the visitor when the category query fails.
          <p className={styles.emptyState} role="alert">
            We couldn&apos;t load categories right now. Please try again later.
          </p>
        ) : (
          // I check whether the successful query returned an empty category list.
          categories.length === 0
        ) ? (
          // I show an empty state when the query succeeds but returns no categories.
          <p className={styles.emptyState}>
            There are no categories yet.
          </p>
        ) : (
          // I map each category to a Card, using its id as a stable key and its slug to build the flashcards URL.
          // I pass the category name and question count so each card can display its content.
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
