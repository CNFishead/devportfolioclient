"use client";

import React, { useEffect } from "react";
import styles from "./Portfolio.module.scss";
import useApiHook from "@/state/useApi";
import Loader from "@/components/loader/Loader.component";
import Error from "@/components/error/Error.component";
import Empty from "@/components/empty/Empty.component";
import ProjectItem from "@/components/projectItem/ProjectItem.component";
import { motion } from "framer-motion";
import Link from "next/link";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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

const Portfolio = () => {
  const {
    data: projectData,
    isLoading,
    isError,
    error,
    refetch,
  } = useApiHook({
    url: "/project",
    key: "portfolio",
    filter: "isFeatured;true",
    sort: "createdAt;-1",
    limit: 3,
    method: "GET",
  }) as any;

  useEffect(() => {
    refetch(); // ensure freshness on mount
  }, [refetch]);

  if (isLoading) return <Loader title="Loading featured projects..." />;
  if (isError) return <Error error={error} />;
  if (!projectData || projectData?.projects?.length === 0) {
    return <Empty message="No featured projects to display." />;
  }

  return (
    <section className={styles.container}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>
          Featured <span className={styles.textFlair}>Projects</span>
        </h1>
      </div>

      <div className={styles.projectContainer}>
        {projectData.projects.map((project: any, index: number) => (
          <motion.div
            key={project._id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className={styles.projectWrapper}
          >
            <ProjectItem project={project} />
          </motion.div>
        ))}
      </div>

      <div className={styles.footerLink}>
        <Link href="/projects" className={styles.linkButton}>
          See All Featured Projects
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
