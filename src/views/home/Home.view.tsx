"use client";

import React from "react";
import styles from "./Home.module.scss";
import homepageViews from "@/data/homepageViews";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait">
        {homepageViews.map((view) => (
          <motion.section
            key={view._id}
            id={view.link}
            className={styles.section}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: 0.1 * view._id }}
          >
            <div className={styles.sectionHeader}>
              <p className={styles.sectionTitle}>
                {view.icon} {view.title}
              </p>
            </div>
            {view.component}
          </motion.section>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Home;
