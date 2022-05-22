import React from "react";
import { About } from "../components/About";
import { Home } from "../components/Home";
import Pricing from "../components/Pricing";
import Works from "../components/Works";

const HomePage = () => {
  return (
    <div>
      <Home />
      <About />
      {/* <Works /> */}
      {/* <Pricing /> */}
    </div>
  );
};

export default HomePage;
