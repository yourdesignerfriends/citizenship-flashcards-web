import styles from "./PageHero.module.css";

type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
};

export default function PageHero({
  kicker,
  title,
  description,
}: PageHeroProps) {
  return (
    <header className={styles.hero}>
      <p className={styles.kicker}>{kicker}</p>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </header>
  );
}
