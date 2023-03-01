import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import WhyChooseUs from "../components/Sections/WhyChooseUs";
import Footer from "../components/Sections/Footer";
import OurPartners from "../components/Sections/OurPartners";
import DigitalMediaServices from '../components/Sections/DigitalMediaServices';
import AboutUs from "../components/Sections/AboutUs";
import GetInTouch from "../components/Sections/Get-In-Touch";
import ValueBringing from './../components/Sections/ValueBringing';
import UpArrow from "../assets/svg/up-arrow.svg"
import AuditService from "../components/Sections/AuditService";

export default function Landing() {
  return (
    <>
      <Header />
      <AboutUs/>
      <ValueBringing />
      <AuditService/>
      <DigitalMediaServices />
      <WhyChooseUs />
      <OurPartners />
      <GetInTouch />
      <Footer />
      <a href="#" className="back-to-top"><img src={UpArrow} width={16} height={16} alt="backtotop"/></a>
    </>
  );
}


