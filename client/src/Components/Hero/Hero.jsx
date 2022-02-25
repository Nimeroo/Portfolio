import "./Hero.css";
import React from "react";

const Hero = ({ homeReference }) => {
  return (
    <div id="hero-container" ref={homeReference}>
      <div id="hero-wrapper">
        <div id="hero-name">
          <h1>Joel</h1>
          <h1>Giroux</h1>
        </div>
        <div id="hovered-hero-name">
          <h1>Joel</h1>
          <h1>Giroux</h1>
        </div>
      </div>
      <div id="secondary-text">
        <h3>Frontend Developer</h3>
        <h3>Backend Developer</h3>
      </div>
    </div>
  );
};

export default Hero;
