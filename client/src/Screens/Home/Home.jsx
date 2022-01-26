import React from "react";
import About from "../../Components/About/About";
import Hero from "../../Components/Hero/Hero";
import Skills from "../../Components/Skills/Skills";
import Contact from "../../Components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
