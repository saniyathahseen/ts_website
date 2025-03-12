import React from "react";
import "./Stories.css";
import StoriesCard from "../../Shared/Components/StoriesCard/StoriesCard";
import img4 from "./../../Assets/Images/stories/1.jpg";
import img5 from "./../../Assets/Images/stories/2.jpg";
import img6 from "./../../Assets/Images/stories/3.jpg";

const userData = [
  {
    title: "Dubai",
    url: "http://localhost:3000/stories/2021/5/20/trisha-and-nihaal",
    desc: "TRISHA X NIHAAL",
    src: img4,
    date: "June 15, 2021",
    review:
      "It unfolded like a scene straight out of a movie as VISHAL & AISHWARYA took their last phera.",
  },
  {
    title: "Bangalore",
    url: "http://localhost:3000/stories/2021/5/20/trisha-and-nihaal",
    desc: "TRISHA X NIHAAL",
    src: img5,
    date: "May 20, 2021",
    review:
      "It unfolded like a scene straight out of a movie as VISHAL & AISHWARYA took their last phera.",
  },
  {
    title: "Hyderabad",
    url: "http://localhost:3000/stories/2021/5/20/trisha-and-nihaal",
    desc: "TRISHA X NIHAAL",
    src: img6,
    date: "Nov 15, 2021",
    review:
      "It unfolded like a scene straight out of a movie as VISHAL & AISHWARYA took their last phera.",
  },
];

const Stories = () => {
  return (
    <div className="stories-container">
      {userData.map((element) => (
        <StoriesCard data={element} key={element.title} />
      ))}
    </div>
  );
};

export default Stories;