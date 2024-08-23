import React from "react";

import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <Experience />
      <Projects />
      <Technologies />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;