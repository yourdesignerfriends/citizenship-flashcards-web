import styles from "./PageHero.module.css";

// I define the text that each page must provide to its hero.
type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
};

// I render a consistent page introduction using the text passed in as props.
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
