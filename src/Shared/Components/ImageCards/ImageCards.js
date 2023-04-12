import React, { forwardRef } from "react";
const ImageCards = forwardRef(({ data, mode }, ref) => {
  return (
    <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
      <a
        href={data?.['url']}
        id="yui_3_17_2_1_1667997044653_96"
      >
        <img
          className="d-block w-100"
          src= {data?.['src']}
          alt="ImageOne"
        />
        <div className="e-card-stacked">
          <div className="e-card-header">
            <div className="e-card-header-caption">
              <div className="e-card-header-title">
                {data?.['title']}
              </div>
            </div>
          </div>
          <div className="e-card-content">{data?.['desc']}</div>
        </div>
      </a>
    </div>
  );
});

export default ImageCards;
