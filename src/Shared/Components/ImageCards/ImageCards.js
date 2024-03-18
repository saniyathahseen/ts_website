import React, { forwardRef } from "react";
const ImageCards = forwardRef(({ data, mode }, ref) => {
  return (
    <div class="card">
      <a style={{ textDecoration: 'none', color: 'black' }} href={data?.['url']} id="yui_3_17_2_1_1667997044653_96" >
        <img class="card-img-top" src={data?.['src']} alt="ImageOne"></img>
        <div class="card-body">
          <h5 class="card-title">{data?.['title']}</h5>
          <p class="card-text">{data?.['desc']}</p>
        </div>
      </a>
    </div>
  );
});

export default ImageCards;
