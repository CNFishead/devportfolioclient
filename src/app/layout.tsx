import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "./layout.module.scss"; // SCSS module import
import "./globals.css";
import Sidebar from "@/layouts/sidebar/Sidebar.layout";
import NavigationPane from "@/layouts/navigationPane/NavigationPane.layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Showcasing my skills, projects, and resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.layoutRoot}>
          <aside className={styles.sidebar}>
            <Sidebar />
          </aside>
          <main className={styles.mainContent}>{children}</main>
          <nav className={styles.navPane}>
            <NavigationPane />
          </nav>
        </div>
      </body>
    </html>
  );
}
