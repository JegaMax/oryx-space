import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import WhyChooseUs from "../components/Sections/WhyChooseUs";
import Footer from "../components/Sections/Footer";
import OurValue from "../components/Sections/OurValues";
import OurPartners from "../components/Sections/OurPartners";
import DigitalMediaServices from '../components/Sections/DigitalMediaServices';
import AboutUs from "../components/Sections/AboutUs";
import GetInTouch from "../components/Sections/Get-In-Touch";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <AboutUs/>
      <OurValue />
      <DigitalMediaServices />
      <WhyChooseUs />
      <OurPartners />
      <GetInTouch />
      <Footer />
    </>
  );
}


