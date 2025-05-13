"use client";
import React, { useState } from "react";
import styles from "./NavigationPane.module.scss";
import Link from "next/link";
import pages from "@/data/pages";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import useScrollSpy from "@/hooks/useScrollSpy";

const NavigationPane = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(pages.map((page) => page.anchorId));
  return (
    <>
      {/* Overlay for mobile nav */}
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}

      {/* Drawer toggle button */}
      <button
        className={`${styles.toggleButton} ${isOpen ? styles.openBtn : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
      >
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>

      {/* Navigation Drawer */}
      <nav className={`${styles.container} ${isOpen ? styles.open : ""}`} aria-label="Primary Navigation">
        {pages.map((page) => (
          <div key={page.title} className={styles.itemWrapper}>
            <Link
              href={page.url}
              className={`${styles.navigationItem} ${activeSection === page.anchorId ? styles.active : ""}`}
              aria-label={page.title}
            >
              <span className={styles.icon}>{page.icon}</span>
              <span className={styles.tooltip}>{page.tooltip}</span>
            </Link>
          </div>
        ))}
      </nav>
    </>
  );
};

export default NavigationPane;
