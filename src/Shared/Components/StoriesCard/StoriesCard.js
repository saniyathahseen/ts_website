import React, { forwardRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
const StoriesCard = forwardRef(({ data, mode }, ref) => {
  return (
    <center><div className="card mb-3 text-center" style={{ maxWidth: "50rem" }}>
      <img className="card-img-top mx-auto" src={data?.['src']} alt={data?.['title']} ></img>
      <div className="card-body">
        <h5 className="card-title">{data?.['desc']}A</h5>
        <div className="meta">
          <span className="date">
            <time className="published" datetime="2021-05-20">
              {data?.['date']}
            </time>
          </span>
        </div>
        <p className="card-text">{data?.['review']}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div></center>
  );
});

export default StoriesCard;
