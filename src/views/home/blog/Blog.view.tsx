"use client";

import React from "react";
import styles from "./Blog.module.scss";
import { motion } from "framer-motion";
import BlogItem from "@/components/blogItem/BlogItem.component";
import Loader from "@/components/loader/Loader.component";
import Error from "@/components/error/Error.component";
import Empty from "@/components/empty/Empty.component";
import Link from "next/link";
import useApiHook from "@/state/useApi";
import BlogType from "@/types/BlogType";

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

const Blog = () => {
  const {
    data: blogData,
    isLoading,
    isError,
    error,
  } = useApiHook({
    url: `/blog`,
    key: `blog`,
    limit: 2,
    sort: "createdAt;-1",
    filter: "isFeatured;true,isPrivate;false",
    method: "GET",
  }) as any;

  if (isLoading) return <Loader title="Loading featured blogs..." />;
  if (isError) return <Error error={error} />;
  if (!blogData || blogData.blogs.length === 0) {
    return <Empty message="No featured blogs to display." />;
  }

  return (
    <motion.section initial="hidden" animate="visible" className={styles.container}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>
          Featured <span className={styles.textFlair}>Blogs</span>
        </h1>
      </div>

      <div className={styles.blogList}>
        {blogData.blogs.map((blog: BlogType, index: number) => (
          <motion.div
            key={blog._id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className={styles.blogWrapper}
          >
            <BlogItem blog={blog} />
          </motion.div>
        ))}
      </div>

      <div className={styles.footerLink}>
        <Link
          href="https://blog.austinhoward.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkButton}
        >
          See All Blogs
        </Link>
      </div>
    </motion.section>
  );
};

export default Blog;
