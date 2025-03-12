import React, { forwardRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./StoriesCard.css"; // Add custom styles

const StoriesCard = forwardRef(({ data, mode }, ref) => {
  return (
    <div className="stories-card">
      <div className="card mb-3 text-center">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img className="card-img-top mx-auto" src={data?.src} alt={data?.title} />
        <div className="card-body">
          <h5 className="card-title">{data?.desc}</h5>
          <div className="meta">
            <span className="date">
              <time className="published" dateTime={data?.date}>
                {data?.date}
              </time>
            </span>
          </div>
          <p className="card-text">{data?.review}</p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
});

export default StoriesCard;