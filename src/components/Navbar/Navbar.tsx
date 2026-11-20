import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  // I keep one link list so my desktop and mobile menus stay in sync.
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/categories", label: "Categories" },
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="US Citizenship Flashcards, home">
          <Image src="/flag.svg" alt="" width={28} height={20} />
          US Citizenship Flashcards
        </Link>

        {/* I show the primary links directly on wider screens. */}
        <nav className={styles.nav} aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navItem}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* I use a native details element to reveal the navigation on smaller screens. */}
        <div className={styles.actions}>
          <details className={styles.mobileMenu}>
            <summary className={styles.hamburgerButton} aria-label="Toggle navigation menu">
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </summary>

            <div className={styles.mobileMenuPanel}>
              <nav className={styles.mobileNav} aria-label="Mobile primary">
                {navLinks.map((link) => (
                  <Link key={`mobile-${link.href}`} href={link.href} className={styles.mobileUtilityLink}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}