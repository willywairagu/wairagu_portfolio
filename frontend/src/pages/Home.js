import React from "react";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
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
      <div id="experience">
        <Experience />
      </div>
      <Projects />
      <Technologies />
      <Testimonials />
      <Contact />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingY={4}
      >
        <Button component={Link} to="/blog" variant="contained" color="primary" size="large">
          Visit Blog
        </Button>
      </Box>
    </div>
  );
};

export default Home;