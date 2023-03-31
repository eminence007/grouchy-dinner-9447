import React from "react";
import AppsDevices from "../Components/Home/AppsDevices";
import CallToAction from "../Components/Home/CallToAction";
import FeaturesList1 from "../Components/Home/FeaturesList1";
import FeaturesList2 from "../Components/Home/FeaturesList2";
import Footer from "../Components/Home/Footer";
import ProCTA from "../Components/Home/ProCTA";
import TopHero from "../Components/Home/TopHero";
import NavBar from "../Components/NavBar/NavBar";
import MediaMentions from "../Components/Home/MediaMentions";
import ReviewSection from "../Components/Home/ReviewSection";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <TopHero />
      <MediaMentions/>
      <FeaturesList1 />
      <FeaturesList2 />
      <CallToAction />
      <AppsDevices />
      <ReviewSection />
      <ProCTA />
      <Footer />
    </>
  );
};

export default HomePage;
