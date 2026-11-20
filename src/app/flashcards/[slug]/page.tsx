// I use Next.js Link for client-side navigation back to the categories page.
import Link from "next/link";
// I use notFound to render Next.js's default 404 page when the URL slug does not match a category.
// In the future, I plan to create a custom 404 page for a more personal and consistent experience.
import { notFound } from "next/navigation";
// I reuse my PageHero component to keep the category heading consistent with my other pages.
import PageHero from "@/components/PageHero/PageHero";
// I import the server-side category query that finds a category and its questions by slug.
import { getCategoryBySlug } from "@/lib/data/categories";
// I import local styles for this dynamic flashcards page.
import styles from "./page.module.css";

// I describe the route props so I expect params to contain a promise with the URL slug.
type CategoryFlashcardsPageProps = {
  params: Promise<{ slug: string }>;
};

// I make this page async so I can wait for the route params and category query before rendering.
export default async function CategoryFlashcardsPage({
  params,
}: CategoryFlashcardsPageProps) {
  // I await the params promise and extract the slug from the current URL.
  const { slug } = await params;
  // I use the slug to ask Prisma for the matching category, its questions, and its answers.
  const category = await getCategoryBySlug(slug);

  // I stop rendering this page and show Next.js's not-found result when no category matches.
  if (!category) {
    notFound();
  }

  return (
    <>
      {/* I give visitors a direct link back to the category list. */}
      <Link className={styles.backLink} href="/categories">
        Back to categories
      </Link>

      {/* I pass the database category name and question count to my shared PageHero. */}
      <PageHero
        kicker="U.S. Citizenship Flashcards"
        title={category.name}
        description={`${category.questions.length} questions in this category`}
      />

      {/* I choose between the flashcard list and an empty state based on the question count. */}
      {category.questions.length > 0 ? (
        <ol className={styles.questionList}>
          {/* I map each question to an ordered flashcard and use its index to number the display. */}
          {category.questions.map((question, index) => (
            <li className={styles.questionItem} key={question.id}>
              {/* I use the database id as a stable React key and details as the expandable flashcard. */}
              <details className={styles.flashcard}>
                <summary className={styles.question}>
                  <span className={styles.questionNumber}>
                    Question {index + 1}
                  </span>
                  <span>{question.question}</span>
                  <span className={styles.showAnswer}>Show answer</span>
                  <span className={styles.hideAnswer}>Hide answer</span>
                </summary>

                <div className={styles.answer}>
                  {/* I change the answer heading based on whether the question has one or several accepted answers. */}
                  <h2 className={styles.answerTitle}>
                    {question.answers.length > 1
                      ? "Accepted answers"
                      : "Answer"}
                  </h2>
                  <ul className={styles.answerList}>
                    {/* I render every accepted answer for this question. */}
                    {question.answers.map((answer) => (
                      <li key={answer}>{answer}</li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
          ))}
        </ol>
      ) : (
        // I show an empty state when this category exists but has no questions.
        <p className={styles.emptyState}>
          There are no questions in this category yet.
        </p>
      )}
    </>
  );
}
