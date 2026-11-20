import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { siteMetadata } from "@/config/site";
import styles from "./layout.module.css";
import "./globals.css";

// I import my shared site metadata and export it under the name Next.js recognizes.
export const metadata = siteMetadata;

// I wrap the current page, passed in as children, with the shared navigation and footer.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // I set the document language to English so browsers and assistive technologies can interpret the content correctly.
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {/* I place each page's content in the main landmark, between the shared navigation and footer. */}
        <main className={styles.main}>
          <div className={styles.content}>{children}</div>
        </main>
        <Footer/>
      </body>
    </html>
  );
}