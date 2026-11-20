// I use Next.js Link for navigation between pages in my app.
import Link from "next/link";
// I use Next.js Image to render the small flag in my brand link.
import Image from "next/image";
// I import the styles that shape the footer layout.
import styles from "./Footer.module.css";

// I keep my footer link groups in one place so I can render each column from the same structure.
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

// I define the shared footer that appears across the pages in my app.
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* I link my brand back to Home and describe what the app helps visitors do. */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            {/* I leave the flag's alt text empty because the adjacent brand text already names the link. */}
            <Image src="/flag.svg" alt="" width={28} height={20} />
            US Citizenship Flashcards
          </Link>
          <p className={styles.tagline}>
            An interactive study web app designed to help you prepare for the U.S. Citizenship Civics Test with ease.
          </p>
        </div>

        {/* I render each link group as an accessible footer navigation column. */}
        <nav className={styles.cols} aria-label="Footer">
          {columns.map((col) => (
            <div key={col.heading} className={styles.col}>
              <h3 className={styles.colHeading}>{col.heading}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    {/* I use the link data above to connect each label to its destination. */}
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* I show the copyright and rights notice in the footer's closing row. */}
      <div className={`container ${styles.bottom}`}>
        <p>&copy; 2026 US Citizenship Flashcards. Built by Analina Nielsen</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
}