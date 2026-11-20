// I use Next.js Link to make the entire card navigate to its destination.
import Link from "next/link";
// I import the styles that define the card's appearance.
import styles from "./Card.module.css";

// I define the text and destination that each reusable card needs.
type CardProps = {
  href: string;
  title: string;
  description: string;
};

// I accept the card's destination, title, and description as props.
export default function Card({ href, title, description }: CardProps) {
  return (
    // I make the whole card clickable and use nested spans to style its content.
    <Link href={href} className={styles.card}>
      <span className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </span>
    </Link>
  );
}
