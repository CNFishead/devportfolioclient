import React from "react";
import styles from "./CallToAction.module.scss";

const CTA = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Let&apos;s Work Together</h2>
      <p className={styles.description}>
        Whether you&apos;ve got a project idea or just want to say hello — I&apos;m always open to a great conversation.
      </p>
      <a href="mailto:cnfishead@gmail.com" className={styles.emailButton}>
        Reach Out via Email
      </a>
    </section>
  );
};

export default CTA;
