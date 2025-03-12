import React, { forwardRef } from "react";
const ImageCards = forwardRef(({ data, mode }, ref) => {
  return (
    <div className="card">
      <a style={{ textDecoration: 'none', color: 'black' }} href={data?.['url'] || "#"} >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img className="card-img-top" src={data?.['src']} alt={data?.['title']}></img>
        <div className="card-body">
          <h5 className="card-title">{data?.['title']}</h5>
          <p className="card-text">{data?.['desc']}</p>
        </div>
      </a>
    </div>
  );
});

export default ImageCards;
