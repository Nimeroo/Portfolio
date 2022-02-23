import React from "react";
import About from "../../Components/About/About";
import Hero from "../../Components/Hero/Hero";
import Skills from "../../Components/Skills/Skills";
import Contact from "../../Components/Contact/Contact";

const Home = ({scrollTo, homeReference, aboutReference, skillsReference, contactReference}) => {
  return (
    <div>
      <Hero homeReference={homeReference}/>
      <About aboutReference={aboutReference}/>
      <Skills scrollTo={scrollTo} skillsReference={skillsReference}/>
      <Contact contactReference={contactReference}/>
    </div>
  );
};

export default Home;
