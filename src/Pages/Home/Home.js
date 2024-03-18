import React from "react";
import "./Home.css";
import ImageSlider from "./../../Shared/Components/ImageSlider/ImageSlider";
import ImageCards from "./../../Shared/Components/ImageCards/ImageCards";
import CarouselSlider from "./../../Shared/Components/Carousel/Carousel";

const userData = {
  user1: {
    title: "Dubai",
    url: "http://localhost:3000/stories/2021/5/20/trisha-and-nihaal",
    desc: "TRISHA X NIHAAL // HYDERABAD",
    src: "../../Assets/Images/one.jpg"
  },
  user2: {
    title: "Bangalore",
    url: "http://localhost:3000/stories/2021/5/20/trisha-and-nihaal",
    desc: "TRISHA X NIHAAL // HYDERABAD",
    src: "../../Assets/Images/2.jpg"
  },
  user3: {
    title: "HYDERABAD",
    url: "http://localhost:3000/stories/2021/5/20/trisha-and-nihaal",
    desc: "TRISHA X NIHAAL // HYDERABAD",
    src: "../../Assets/Images/3.jpg"
  },
};
const Home = () => {
  return (
    <div class="container">
      <CarouselSlider />
      <h1>YOU FEEL. I FOCUS. WE FRAME</h1>
      <p>
        A wedding is a validation coupled with the showcase of Love inclusive of
        various events with exotic venues, food, guests, dresses, jewelry and so
        on- What if it could never be recorded?
      </p>
      <p>
        A chronology of a couple’s journey where they vow together to be One.
      </p>
      <h2>we are creating fiction out of reality.</h2>
      <ImageSlider />
      <h1>REAL LOVE STORIES</h1>
      <h2>
        LIKE A RIVER FLOWS SURELY TO THE SEA, SO IT GOES SOME THINGS ARE MEANT
        TO BE.
      </h2>
      <div class="card-group">
        <ImageCards data={userData.user1} />
        <ImageCards data={userData.user2} />
        <ImageCards data={userData.user3} />
      </div>
    </div>
  );
};

export default Home;
