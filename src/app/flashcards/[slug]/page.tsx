import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero/PageHero";
import { getCategoryBySlug } from "@/lib/data/categories";
import styles from "./page.module.css";

type CategoryFlashcardsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryFlashcardsPage({
  params,
}: CategoryFlashcardsPageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <Link className={styles.backLink} href="/categories">
        Back to categories
      </Link>

      <PageHero
        kicker="U.S. Citizenship Flashcards"
        title={category.name}
        description={`${category.questions.length} questions in this category`}
      />

      {category.questions.length > 0 ? (
        <ol className={styles.questionList}>
          {category.questions.map((question, index) => (
            <li className={styles.questionItem} key={question.id}>
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
                  <h2 className={styles.answerTitle}>
                    {question.answers.length > 1
                      ? "Accepted answers"
                      : "Answer"}
                  </h2>
                  <ul className={styles.answerList}>
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
        <p className={styles.emptyState}>
          There are no questions in this category yet.
        </p>
      )}
    </>
  );
}
