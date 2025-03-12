import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import img4 from "./../../../Assets/Images/home/4.jpg";
import img5 from "./../../../Assets/Images/home/5.jpg";
import img6 from "./../../../Assets/Images/home/6.jpg";
import img7 from "./../../../Assets/Images/home/7.jpg";


const ImgData = [
  { title: "Image One", src: img4, caption: "Sample Text for Image One" },
  { title: "Image Two", src: img5, caption: "Sample Text for Image Two" },
  { title: "Image Three", src: img6, caption: "Sample Text for Image Three" },
  { title: "Image Four", src: img7, caption: "Sample Text for Image Four" },
];

const CarouselSlider = () => {
  return (
    <div className="carousel-container">
      <Carousel fade touch={true} interval={3000}>
        {ImgData.map((item) => (
          <Carousel.Item key={item.title}>
            <img className="d-block w-100 carousel-image" src={item.src} alt={item.title} />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;