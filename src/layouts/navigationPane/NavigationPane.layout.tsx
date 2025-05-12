import React from "react";
import styles from "./NavigationPane.module.scss";
import Link from "next/link";
import pages from "@/data/pages";

const NavigationPane = () => {
  return (
    <nav className={styles.container} aria-label="Primary Navigation">
      {pages.map((page) => (
        <Link key={page.title} href={page.url} className={styles.navigationItem} aria-label={page.title}>
          <span className={styles.icon}>{page.icon}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavigationPane;
