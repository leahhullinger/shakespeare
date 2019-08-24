import React from "react";
import StarRatings from "react-star-ratings";
import Counter from "../Counter/Counter";
import styles from "./ReviewCard.module.css";

const ReviewCard = ({ date, body, rating, author }) => {
  return (
    <div className={styles.container}>
      <div className={styles.ratingWrapper}>
        <p className={styles.rating}>{rating}</p>
        <StarRatings
          rating={rating}
          starRatedColor="#FF0059"
          numberOfStars={6}
          starDimension="30px"
          starSpacing="3px"
        />
      </div>
      <div className={styles.postInfo}>
        <p>{date}</p>
        <p>{author}</p>
      </div>
      <div className={styles.reviewWrapper}>
        <p>"{body}"</p>
      </div>
      <div className={styles.footer}>
        <Counter />
      </div>
    </div>
  );
};

export default ReviewCard;
