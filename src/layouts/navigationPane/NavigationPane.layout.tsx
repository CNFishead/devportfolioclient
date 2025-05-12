import React from "react";
import styles from "./NavigationPane.module.scss";
import Link from "next/link";
import pages from "@/data/pages";

const NavigationPane = () => {
  return (
    <nav className={styles.container} aria-label="Primary Navigation">
      {pages.map((page) => (
        <div key={page.title} className={styles.itemWrapper}>
          <Link href={page.url} className={styles.navigationItem} aria-label={page.title}>
            <span className={styles.icon}>{page.icon}</span>
            <span className={styles.tooltip}>{page.tooltip}</span>
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default NavigationPane;
