import React from "react";
import StarRatings from "react-star-ratings";
import formatDate from "../formatDate/formatDate";
import styles from "./ReviewCard.module.css";

const ReviewCard = ({ body, rating, author }) => {
  return (
    <div className={styles.container}>
      <div className={styles.ratingWrapper}>
        <p className={styles.rating}>{rating}</p>
        <StarRatings
          rating={rating}
          starRatedColor="#FF0059"
          numberOfStars={6}
          starDimension="20px"
          starSpacing="3px"
        />
      </div>
      <div className={styles.postInfo}>
        <p>{formatDate}</p>
        <p>{author}</p>
      </div>
      <div className={styles.reviewWrapper}>
        <p>"{body}"</p>
      </div>
      <div className={styles.footer}>
        <button>agree</button>
        <button>disagree</button>
      </div>
    </div>
  );
};

export default ReviewCard;
