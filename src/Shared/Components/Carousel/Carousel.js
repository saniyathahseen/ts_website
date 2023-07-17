import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
const ImgData = {
  0: {
    title:"ImageOne",
    src:"https://drive.google.com/uc?export=view&id=1cXYFTOCLNo7H0mvm6-BPWzRXV4fqIBXY"
  },
  1: {
    title:"ImageTwo",
    src:"https://drive.google.com/uc?export=view&id=1NscLZ99LZCtnEgE3f35NE0HjGZ9p1HRn"
  },
  2: {
    title:"ImageThree",
    src:"https://drive.google.com/uc?export=view&id=1C6_DB8yMNYk71Yyclvx0Hp8ZafBv03i_"
  },
  3: {
    title:"ImageFour",
    src:"https://drive.google.com/uc?export=view&id=1YTcfJa-Htm7nCnABGj33Ly0cfUEKH3dk"
  },
};
const CarouselSlider = () => {
  return (
    <div
      class="container"
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
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={ImgData?.[3]?.src}
            alt={ImgData?.[3]?.title}
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
