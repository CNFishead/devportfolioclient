"use client";

import React, { useEffect, useState } from "react";
import styles from "./Projects.module.scss";
import useApiHook from "@/state/useApi";
import Loader from "@/components/loader/Loader.component";
import Error from "@/components/error/Error.component";
import Empty from "@/components/empty/Empty.component";
import ProjectItem from "@/components/projectItem/ProjectItem.component";
import { motion } from "framer-motion";
import Paginator from "@/components/pagination/Paginator.component";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  const [page, setPage] = useState(1);
  const limit = 6;

  const {
    data: projectData,
    isLoading,
    isError,
    error,
    refetch,
  } = useApiHook({
    url: `/project`,
    key: [`projects-page`, page],
    method: "GET",
    limit,
    pageNumber: page,
    sort: "createdAt;-1",
  }) as any;

  useEffect(() => {
    refetch(); // refresh on page change
  }, [page, refetch]);

  if (isLoading) return <Loader title="Loading projects..." />;
  if (isError) return <Error error={error} />;
  if (!projectData || projectData?.projects?.length === 0) {
    return <Empty message="No projects found." />;
  }

  const totalPages = Math.ceil(projectData.totalCount / limit);

  return (
    <section className={styles.container}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>
          All <span className={styles.textFlair}>Projects</span>
        </h1>
      </div>

      <div className={styles.projectGrid}>
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

      <div className={styles.paginationWrapper}>
        <Paginator currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </section>
  );
};

export default Projects;
