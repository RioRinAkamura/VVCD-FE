import React from "react";
import FoodCarousel from "./components/FoodCarousel";
import IntroCarousel from "./components/IntroCarousel";
import PlaceCarousel from "./components/PlaceCarousel";

export const About = () => {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <IntroCarousel />
        <PlaceCarousel />
        <FoodCarousel />
      </div>
    </div>
  );
};
