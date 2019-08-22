import React, { Component } from "react";
import axios from "axios";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import styles from "./reviews.module.css";
export default class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: null
    };
  }

  // sort reviews by date?
  componentDidMount() {
    axios({
      method: "get",
      url: "https://shakespeare.podium.com/api/reviews",
      headers: { "x-api-key": "H3TM28wjL8R4#HTnqk?c" }
    })
      .then(response => {
        this.setState({ reviews: response.data });
      })
      .catch(error => console.log("there was an error getting reviews", error));
  }

  render() {
    return (
      <div className={styles.container}>
        {!!this.state.reviews &&
          this.state.reviews.map(review => {
            return (
              <div className={styles.wrapper} key={review.id}>
                <ReviewCard
                  date={review.publish_date}
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
