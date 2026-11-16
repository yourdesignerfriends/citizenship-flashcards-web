import Link from "next/link";
import styles from "./Card.module.css";

type CardProps = {
  href: string;
  title: string;
  description: string;
};

export default function Card({ href, title, description }: CardProps) {
  return (
    <Link href={href} className={styles.card}>
      <span className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </span>
    </Link>
  );
}
