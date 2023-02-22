import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Footer from "../components/Sections/Footer";
import OurValue from "../components/Sections/OurValues";
import OurPartners from "../components/Sections/OurPartners";
import SoftwareDevelopment from './../components/Sections/SoftwareDevelopment';

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <OurValue />
      <SoftwareDevelopment />
      <Projects />
      <Blog />
      <Pricing />
      <OurPartners />
      <Footer />
    </>
  );
}


