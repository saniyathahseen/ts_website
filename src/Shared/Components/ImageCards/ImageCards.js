import React, { forwardRef } from "react";

const ImageCards = forwardRef(({ data }, ref) => {
  return (
    <div className="card image-card">
      {/* <a href={data?.url || "#"} className="card-link" style={{ textDecoration: "none", color: "black" }}> */}
      <img className="card-img-top" src={data?.src} alt={data?.title || "Image"} />
      <div className="card-body">
        <h5 className="card-title">{data?.title}</h5>
        <p className="card-text">{data?.desc}</p>
      </div>
      {/* </a> */}
    </div>
  );
});

export default ImageCards;