import React, { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
  const [likesCount, setLikesCount] = useState(0);
  const [dislikesCount, setDislikesCount] = useState(0);

  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        data-testid="likesBtn"
        onClick={() => setLikesCount(likesCount + 1)}
      >
        <p data-testid="likes">Likes</p>
        {likesCount}
      </button>
      <button
        className={styles.btn}
        data-testid="dislikesBtn"
        onClick={() => setDislikesCount(dislikesCount + 1)}
      >
        <p data-testid="dislikes">Dislikes</p>
        {dislikesCount}
      </button>
    </div>
  );
}

export default Counter;
