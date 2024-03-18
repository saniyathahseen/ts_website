import React, { forwardRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
const StoriesCard = forwardRef(({ data, mode }, ref) => {
  return (
    <center><div class="card mb-3 text-center" style={{ maxWidth: "50rem" }}>
      <img class="card-img-top mx-auto" src={data?.['src']} alt={data?.['title']} ></img>
      <div class="card-body">
        <h5 class="card-title">{data?.['desc']}A</h5>
        <div class="meta">
          <span class="date">
            <time class="published" datetime="2021-05-20">
              {data?.['date']}
            </time>
          </span>
        </div>
        <p class="card-text">{data?.['review']}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div></center>
  );
});

export default StoriesCard;
