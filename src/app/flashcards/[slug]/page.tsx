import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
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
      <Navbar />

      <main className={styles.main}>
        <div className={styles.content}>
          <Link className={styles.backLink} href="/">
            Back to categories
          </Link>

          <header className={styles.intro}>
            <p className={styles.kicker}>U.S. Citizenship Civics Test</p>
            <h1 className={styles.title}>{category.name}</h1>
            <p className={styles.description}>
              {category.questions.length} questions in this category
            </p>
          </header>

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
        </div>
      </main>

      <Footer />
    </>
  );
}
