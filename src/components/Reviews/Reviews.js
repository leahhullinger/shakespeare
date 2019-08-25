import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "../ReviewCard/ReviewCard";
import formatDate from "../../utilities/formatDate";
import styles from "./Reviews.module.css";

import { apiKey } from "../../config";

function Reviews() {
  const [data, setData] = useState(null);

  useEffect(() => {
    onGetReviews();
  }, []);

  const onGetReviews = () => {
    axios({
      method: "get",
      url: "https://shakespeare.podium.com/api/reviews",
      headers: { "x-api-key": apiKey }
    })
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.log("there was an error getting reviews", error));
  };

  return (
    <div className={styles.container}>
      {!!data &&
        data.map(review => {
          return (
            <div className={styles.wrapper} key={review.id}>
              <ReviewCard
                date={formatDate(review.publish_date)}
                body={review.body}
                author={review.author}
                rating={review.rating}
              />
            </div>
          );
        })}
    </div>
  );
}

export default Reviews;
