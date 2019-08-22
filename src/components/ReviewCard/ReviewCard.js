import React from "react";
import styles from "./ReviewCard.module.css";

export default ({ date, body, rating, author }) => {
  return (
    <div className={styles.container}>
      <div className={styles.col_1}>
        <p>{date}</p>
        <div>{rating}</div>
      </div>
      <div className={styles.col_2}>
        <p>{body}</p>
        <p>- {author}</p>
      </div>
    </div>
  );
};
