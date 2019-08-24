import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likesCount: 0,
      dislikesCount: 0
    };
  }

  onLikeClick = () => {
    this.setState({ likesCount: this.state.likesCount + 1 });
  };

  onDislikeClick = () => {
    this.setState({ dislikesCount: this.state.dislikesCount + 1 });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.onLikeClick}
        >{`Likes ${this.state.likesCount}`}</button>
        <button onClick={this.onDislikeClick}>
          {`Dislikes ${this.state.dislikesCount}`}
        </button>
      </div>
    );
  }
}

export default Counter;
