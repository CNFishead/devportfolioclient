"use client";

import React from "react";
import styles from "./AboutMe.module.scss";
import { motion } from "framer-motion";

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const paragraphs = [
  `My journey into software development started long before I ever wrote a line of production code. As a kid, I was drawn to how things worked — taking apart electronics, scripting in games, and automating anything I could. That curiosity turned into a serious pursuit as I dove into self-study and eventually earned my degree in Computer Science.`,

  `I’ve worked on a wide range of projects, from leading the rebuild of a live-streaming platform at Truthcasting to founding ShepherdCMS — a church management system built to empower ministries with digital tools for check-in, volunteer coordination, and engagement tracking.`,

  `I believe good software solves real problems. Through Wulf Developments, I continue to build applications that make life easier, not harder — systems that are fast, reliable, and maintainable. But I’m not just building code — I’m building a future where technology uplifts purpose-driven communities.`,

  `Looking ahead, I want to join a team that values innovation, autonomy, and impact — where I can contribute meaningfully and grow alongside others who are passionate about what they build.`,
];

const AboutMe = () => {
  return (
    <section className={styles.container}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.header}>
          From <span className={styles.title}>Passion</span> to <span className={styles.title}>Profession</span>:
        </h1>
        <h2 className={styles.subtitle}>
          My <span className={styles.jobTitle}>Software Development</span> Journey
        </h2>
      </div>

      <div className={styles.sectionBody}>
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            className={styles.paragraph}
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
            custom={i}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
