"use client";

import React from "react";
import styles from "./Empty.module.scss";
import { BsInbox } from "react-icons/bs";

type Props = {
  message?: string;
};

const Empty = ({ message = "No results found." }: Props) => {
  return (
    <div className={styles.container}>
      <BsInbox className={styles.icon} />
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default Empty;
