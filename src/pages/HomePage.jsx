import React from "react";
import Hero from "../sections/Hero";
import Vision from "../sections/Vision";
import BDay from "../sections/BDay";
import PadelTour from "../sections/PadelTour";
import Pickleball from "../sections/Pickleball";
import Media from "../sections/Media";
import Sponsor from "../sections/Sponsor";
import Contact from "../sections/Contact";
import Navigation from "../sections/Navigation";
import VideoHero from "../sections/VideoHero";
import NewsSlider from "../sections/NewsSlider";
import Footer from "../sections/Footer";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navigation />
      <VideoHero />
      <NewsSlider />
      <div className="space-y-12 p-4">
        <Hero />
        <Vision />
        <BDay />
        <PadelTour />
        <Pickleball />
        <Media />
        <Sponsor />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
