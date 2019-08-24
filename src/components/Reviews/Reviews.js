import React, { Component } from "react";
import axios from "axios";
import ReviewCard from "../ReviewCard/ReviewCard";
import formatDate from "../../utilities/formatDate";
import sortReviews from "../../utilities/sortReviews";
import styles from "./Reviews.module.css";
import { apiKey } from "../../config";

export default class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: null
    };
  }

  componentDidMount() {
    this.onGetReviews();
  }

  onGetReviews = () => {
    axios({
      method: "get",
      url: "https://shakespeare.podium.com/api/reviews",
      headers: { "x-api-key": apiKey }
    })
      .then(response => {
        const sortedResponse = sortReviews(response.data);
        console.log("response", response);
        this.setState({ reviews: sortedResponse });
      })
      .catch(error => console.log("there was an error getting reviews", error));
  };

  // TODO: create func for sorting reviews

  render() {
    return (
      <div className={styles.container}>
        {!!this.state.reviews &&
          this.state.reviews.map(review => {
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
}
