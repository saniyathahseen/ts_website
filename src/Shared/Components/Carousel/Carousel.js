import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
const ImgData = {
  0: {
    title:"ImageOne",
    src:"https://cdn.pixabay.com/photo/2016/06/29/04/39/bride-1486004_960_720.jpg"
  },
  1: {
    title:"ImageTwo",
    src:"https://cdn.pixabay.com/photo/2015/03/30/12/35/sunset-698501_960_720.jpg"
  },
  2: {
    title:"ImageThree",
    src:" https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_960_720.jpg"
  },
  3: {
    title:"ImageTwo",
    src:"https://cdn.pixabay.com/photo/2015/03/30/12/35/sunset-698501_960_720.jpg"
  },
};
const CarouselSlider = () => {
  return (
    <div
      style={{
        display: "block",
        width: 994,
        marginLeft: "15%",
        marginRight: "20%",
        maxHeight: "642px",
      }}
      className="container"
    >
      <Carousel fade touch="true">
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={ImgData?.[0]?.src}
            alt={ImgData?.[0]?.title}
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={ImgData?.[1]?.src}
            alt={ImgData?.[1]?.title}
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={ImgData?.[2]?.src}
            alt={ImgData?.[2]?.title}
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
