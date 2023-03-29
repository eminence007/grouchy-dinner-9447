import React from "react";
import AppsDevices from "../Components/Home/AppsDevices";
import CallToAction from "../Components/Home/CallToAction";
import FeaturesList1 from "../Components/Home/FeaturesList1";
import FeaturesList2 from "../Components/Home/FeaturesList2";
import Footer from "../Components/Home/Footer";
import ProCTA from "../Components/Home/ProCTA";
import Testimonials from "../Components/Home/Testimonials";
import TopHero from "../Components/Home/TopHero";
import NavBar from "../Components/NavBar/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <TopHero />
      {/* mores has to be added here */}
      <FeaturesList1 />
      <FeaturesList2 />
      <CallToAction />
      <AppsDevices />
      <Testimonials />
      <ProCTA />
      <Footer />
    </>
  );
};

export default HomePage;
