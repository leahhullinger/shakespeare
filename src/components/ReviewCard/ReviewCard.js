import React from "react";
import StarRatings from "react-star-ratings";
import styles from "./ReviewCard.module.css";

export default ({ date, body, rating, author }) => {
  return (
    <div className={styles.container}>
      <div className={styles.col_1}>
        <p>{date}</p>
        <div>
          <StarRatings
            rating={rating}
            starRatedColor="blue"
            numberOfStars={6}
            starDimension="20px"
          />
          <p>{rating}</p>
        </div>
      </div>
      <div className={styles.col_2}>
        <p>"{body}"</p>
        <p>- {author}</p>
      </div>
    </div>
  );
};
