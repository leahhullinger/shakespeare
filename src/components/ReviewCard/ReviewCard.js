import React from "react";
import StarRatings from "react-star-ratings";
import styles from "./ReviewCard.module.css";

export default ({ date, body, rating, author }) => {
  const formatDate = date
    .substring(0, date.indexOf("T"))
    .split("-")
    .reverse()
    .join("/");
  return (
    <div className={styles.container}>
      <div className={styles.ratingWrapper}>
        <p>{rating}</p>
        <StarRatings
          rating={rating}
          starRatedColor="blue"
          numberOfStars={6}
          starDimension="20px"
          starSpacing="3px"
        />
      </div>
      <div className={styles.reviewWrapper}>
        <p>{formatDate}</p>
        <p>"{body}"</p>
        <p>- {author}</p>
      </div>
    </div>
  );
};
