"use client";
import React from "react";
import styles from "./Sidebar.module.scss";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import socialLinks from "@/data/socialLinks";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Austin Howard</h1>
      </header>

      <div className={styles.profileImageContainer}>
        <Image src="/images/profile.jpg" alt="Austin Howard" width={160} height={160} className={styles.profileImage} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.email}>cnfishead@gmail.com</h2>
        <h3 className={styles.location}>Based in Morristown, TN</h3>

        <div className={styles.buttonContainer}>
          {socialLinks.map((link) => (
            <Link key={link.id} href={link.url} target="_blank" rel="noreferrer" aria-label={link.name} passHref>
              <span className={styles.icon}>{link.icon}</span>
            </Link>
          ))}
        </div>

        <div className={styles.actionContainer}>
          <a href="#contact" className={styles.actionButton}>
            <CiMail className={styles.icon} />
            <p>Message Me</p>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
