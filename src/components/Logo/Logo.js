import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./logo.css";

const Logo = () => {
  return (
    <div className="container">
      <Tilt>
        <div className="tilt center">
          <img src={brain} alt="brain logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
