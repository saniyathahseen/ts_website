import React from "react";
import Carousel from "react-multi-carousel";
import styles from "./ImageSlider.module.css";
import "react-multi-carousel/lib/styles.css";
import img8 from "./../../../Assets/Images/home/8.jpg";
import img9 from "./../../../Assets/Images/home/9.jpg";
import img10 from "./../../../Assets/Images/home/10.jpg";
import img11 from "./../../../Assets/Images/home/11.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ImgData = [
  { title: "Image One", src: img8 },
  { title: "Image Two", src: img9 },
  { title: "Image Three", src: img10 },
  { title: "Image Four", src: img11 },
];

const ImageSlider = () => {
  return (
    <div className={styles["slider-container"]}>
      <Carousel
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        transitionDuration={1000}
        containerClass={styles["slider-container"]}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass={styles["custom-dot-list-style"]}
        itemClass={styles["carousel-item-padding"]}
      >
        {ImgData.map((item) => (
          <div className={styles["img-container"]} key={item.title}>
            <img className={styles["carousel-image"]} src={item.src} alt={item.title} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;