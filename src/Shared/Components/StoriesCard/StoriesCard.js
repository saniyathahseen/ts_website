import React, { forwardRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./StoriesCard.module.css"; // CSS Module

const StoriesCard = forwardRef(({ data, mode }, ref) => {
  return (
    <div className={styles["stories-card"]}>
      <div className={`card mb-3 text-center ${styles["card-custom"]}`}>
        <img className={`card-img-top mx-auto ${styles["card-img-top"]}`} src={data?.src} alt={data?.title || "Story image"} />
        <div className={`card-body ${styles["card-body"]}`}>
          <h5 className={`card-title ${styles["card-title"]}`}>{data?.desc}</h5>
          <div className="meta">
            <span className={styles["date"]}>
              <time className="published" dateTime={data?.date}>
                {data?.date}
              </time>
            </span>
          </div>
          <p className="card-text">{data?.review}</p>
          <p className="card-text">
            <small className={`text-color ${styles["text-color"]}`}>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
});

export default StoriesCard;