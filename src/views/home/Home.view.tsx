"use client";

import React from "react";
import styles from "./Home.module.scss";
import homepageViews from "@/data/homepageViews";

const Home = () => {
  return (
    <div className={styles.container}>
      {homepageViews.map((view) => (
        <React.Fragment key={view._id}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTitle}>
              {view.icon} {view.title}
            </p>
          </div>
          {view.component}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Home;
