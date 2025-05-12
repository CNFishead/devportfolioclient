"use client";

import React, { useState } from "react";
import styles from "./BlogItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import BlogType from "@/types/BlogType";

interface BlogItemProps {
  blog: BlogType;
}

const MAX_LENGTH = 240;

const BlogItem = ({ blog }: BlogItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = blog.description.length > MAX_LENGTH;
  const text = expanded ? blog.description : blog.description.slice(0, MAX_LENGTH);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={blog.blogImageUrl} alt={blog.blogTitle} width={640} height={360} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{blog.blogTitle}</h2>

        <p className={styles.description}>
          {text}
          {isLong && !expanded && "..."}
          {isLong && (
            <button className={styles.readMore} onClick={() => setExpanded((prev) => !prev)}>
              {expanded ? " See Less" : " See More"}
            </button>
          )}
        </p>

        <div className={styles.links}>
          <Link
            href={`https://blog.austinhoward.dev/blog/${blog.slug}`}
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more <FaExternalLinkAlt />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
