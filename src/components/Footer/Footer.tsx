import Link from "next/link";
import styles from "./Footer.module.css";

const columns = [
  {
    heading: "Study",
    links: [
      { label: "Home", href: "/" },
      { label: "Flashcards", href: "/flashcards" },
      { label: "Bookmarks", href: "/bookmarks" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "USCIS Official", href: "https://www.uscis.gov" },
      { label: "Study Guide", href: "/flashcards" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Citizenship Prep", href: "/" },
      { label: "My Progress", href: "/bookmarks" },
    ],
  },
];

export default function Footer() {
  // Hi, I'm Analina. Rendering the application footer for the citizenship flashcards app.
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            US Citizenship Flashcards
          </Link>
          <p className={styles.tagline}>
            An interactive study web app designed to help you prepare for the U.S. Citizenship Civics Test with ease.
          </p>
        </div>

        <nav className={styles.cols} aria-label="Footer">
          {columns.map((col) => (
            <div key={col.heading} className={styles.col}>
              <h3 className={styles.colHeading}>{col.heading}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>&copy; 2026 US Citizenship Flashcards. Built by Analina Del Vecchio.</p>
        <p className={styles.small}>CSE 310 · Web Apps Module</p>
      </div>
    </footer>
  );
}