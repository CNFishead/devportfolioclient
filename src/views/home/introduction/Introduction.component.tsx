"use client";

import React from "react";
import styles from "./Introduction.module.scss";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Introduction = () => {
  return (
    <section className={styles.section}>
      <motion.h1 className={styles.title} initial="hidden" animate="visible" custom={0} variants={textVariants}>
        Hello, I am <span className={styles.name}>Austin Howard</span>
      </motion.h1>

      <motion.h2 className={styles.subtitle} initial="hidden" animate="visible" custom={1} variants={textVariants}>
        An <span className={styles.highlight}>Innovation Pioneer</span>,{" "}
        <span className={styles.highlight}>Optimization Virtuoso</span>, and{" "}
        <span className={styles.highlight}>Software Engineer</span>
      </motion.h2>

      <motion.p className={styles.descriptor} initial="hidden" animate="visible" custom={2} variants={textVariants}>
        I&apos;m a results-driven Software Engineer and full-stack developer with a passion for building scalable,
        high-performance applications. As the founder and lead developer of ShepherdCMS, I design tools that help
        churches manage volunteer coordination, digital check-ins, and data-driven insights. I specialize in cloud
        architecture, API design, and end-to-end system development — delivering user-focused solutions that are both
        functional and impactful. Through Wulf Developments, I continue to build software that solves real problems with
        clean, maintainable code and thoughtful design.
      </motion.p>
    </section>
  );
};

export default Introduction;
