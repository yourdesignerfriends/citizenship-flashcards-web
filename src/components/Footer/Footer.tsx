import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const columns = [
  {
    heading: "Study",
    links: [
      { label: "Home", href: "/" },
      { label: "Categories", href: "/categories" },
    ],
  },
  {
    heading: "Resources",
    links: [{ label: "USCIS Official", href: "https://www.uscis.gov" }],
  },
  {
    heading: "About",
    links: [{ label: "The Developer", href: "/about" }],
  },
];

export default function Footer() {
  // Hi, I'm Analina. Rendering the application footer for the citizenship flashcards app.
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image src="/flag.svg" alt="" width={28} height={20} />
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
        <p>&copy; 2026 US Citizenship Flashcards. Built by Analina Nielsen</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
}