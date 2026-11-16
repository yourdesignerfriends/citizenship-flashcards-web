import Link from "next/link";
import styles from "./Navbar.module.css";

type NavbarProps = {
  categories: { name: string; slug: string }[];
};

export default function Navbar({ categories }: NavbarProps) {
  // Hi, I'm Analina. Rendering a clean and responsive navigation bar for the citizenship app.
  const navLinks = [
    { href: "/", label: "Home" },
    ...categories.map((category) => ({
      href: `/flashcards/${category.slug}`,
      label: category.name,
    })),
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="US Citizenship Flashcards, home">
          US Citizenship
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav} aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navItem}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Menu */}
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