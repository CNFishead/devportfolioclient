"use client";

import React from "react";
import styles from "./Loader.module.scss";
import { AiOutlineLoading } from "react-icons/ai";

type Props = {
  title?: string;
};

const Loader = ({ title }: Props) => {
  return (
    <div className={styles.container}>
      {title && <p className={styles.title}>{title}</p>}
      <AiOutlineLoading className={styles.spinner} />
    </div>
  );
};

export default Loader;
