import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
// Screens
import Landing from "./screens/Landing.jsx";
import AboutUs from "./screens/AboutUs.jsx";
import SoftwareDevelopment from "./screens/SoftwareDevelopment.jsx";
import QualityEngineering from "./screens/QualityEngineering.jsx";
import Header from "./components/Header"

export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </head>
      <BrowserRouter>
      {/* <HeaderTopNavbar/>
       */}
       <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about-us/:param" element={<AboutUs />} />
        <Route path="/services/software-development/:param" element={<SoftwareDevelopment />} />
        <Route path="/services/quality-engineering/:param" element={<QualityEngineering />} />
        <Route path="/services/digitization/:param" element={<AboutUs />} />
        <Route path="/services/cloud-enablement/:param" element={<AboutUs />} />
        <Route path="/services/automation-services-solutions/:param" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}



