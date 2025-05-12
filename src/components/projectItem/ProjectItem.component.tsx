'use client';

import React, { useState } from 'react';
import styles from './ProjectItem.module.scss';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import ProjectType from '@/types/ProjectType';

interface ProjectItemProps {
  project: ProjectType;
}

const MAX_LENGTH = 240;

const ProjectItem = ({ project }: ProjectItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = project.description.length > MAX_LENGTH;
  const displayText = expanded
    ? project.description
    : project.description.slice(0, MAX_LENGTH);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={project.photo}
          alt={project.name}
          width={640}
          height={360}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{project.name}</h2>

        <p className={styles.description}>
          {displayText}
          {isLong && !expanded && '...'}
          {isLong && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className={styles.readMore}
            >
              {expanded ? ' See Less' : ' See More'}
            </button>
          )}
        </p>

        <div className={styles.techStack}>
          {project.languages.map((lang) => (
            <span key={lang} className={styles.tag}>
              {lang}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {project.liveProjectURL && (
            <Link
              href={project.liveProjectURL}
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site <FaExternalLinkAlt />
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <FaExternalLinkAlt />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
