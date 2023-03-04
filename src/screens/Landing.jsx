import React from "react";
// Sections
import Header from "../components/Sections/Header";
import WhyChooseUs from "../components/Sections/WhyChooseUs";
import OurPartners from "../components/Sections/OurPartners";
import GetInTouch from "../components/Sections/Get-In-Touch";
import ValueBringing from './../components/Sections/ValueBringing';
import UpArrow from "../assets/svg/up-arrow.svg"
import AuditService from "../components/Sections/ServiceOffering";
import ContactUs from "../components/Sections/ContactUs";

export default function Landing() {
  return (
    <>
      <Header />
      <ValueBringing />
      <AuditService />
      <WhyChooseUs />
      <OurPartners />
      <GetInTouch />
      <ContactUs />
      <a href="#" className="back-to-top"><img src={UpArrow} width={16} height={16} alt="backtotop" /></a>
    </>
  );
}


