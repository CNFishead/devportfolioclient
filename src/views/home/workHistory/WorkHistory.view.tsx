"use client";

import React from "react";
import styles from "./WorkHistory.module.scss";
import moment from "moment";
import { motion } from "framer-motion";
import useApiHook from "@/state/useApi";
import Loader from "@/components/loader/Loader.component";
import Error from "@/components/error/Error.component";
import Empty from "@/components/empty/Empty.component";
import WorkExperienceType from "@/types/WorkExperienceType";

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const WorkHistory = () => {
  const {
    data: workhistory,
    isLoading,
    isError,
    error,
  } = useApiHook({
    url: "/experience",
    key: "work-history",
    filter: "isHidden;false",
    method: "GET",
  }) as any;

  if (isLoading) return <Loader />;
  if (isError) return <Error error={error} />;
  if (!workhistory || workhistory?.data?.length === 0) return <Empty message="No Work History to show" />;

  return (
    <section className={styles.container}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>
          Education & <span className={styles.textFlair}>Experience</span>
        </h1>
      </div>

      <div className={styles.sectionBody}>
        {workhistory.data.map((history: WorkExperienceType, index: number) => (
          <motion.div
            key={history._id}
            className={styles.historyContainer}
            initial="hidden"
            animate="visible"
            custom={index}
            variants={itemVariants}
          >
            <div className={styles.historyItem}>
              <h3 className={styles.jobTitle}>
                {history.jobTitle} @ {history.name}
              </h3>

              <p className={styles.dates}>
                {moment(history.startDate).format("MM/YYYY")} –{" "}
                {history?.endDate ? moment(history.endDate).format("MM/YYYY") : "Present"}
              </p>

              <ul className={styles.pointList}>
                {history.jobDescription.map((point: string, i: number) => (
                  <li key={i} className={styles.point}>
                    <span className={styles.pointText}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkHistory;
