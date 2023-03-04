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
import Digitalization from "./screens/Digitalization.jsx";
import ALMLDataEngineering from "./screens/ALMLDataEngineering.jsx";
import AuditService from "./screens/AuditService.jsx";
import BusinessProcess from "./screens/BusinessProcessService.jsx";
import ManagedService from "./screens/ManagedService.jsx";
import TopBanner from "./components/Elements/TopBanner.js";
import ContactUs from "./screens/ContactUs.jsx";

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
      <TopBanner/>
       <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about-us/:param" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services/app-development-modernization/:param" element={<SoftwareDevelopment />} />
        <Route path="/services/quality-engineering/:param" element={<QualityEngineering />} />
        <Route path="/services/digitization/:param" element={<Digitalization />} />
        <Route path="/services/audit/:param" element={<AuditService />} />
        <Route path="/services/business-process/:param" element={<BusinessProcess />} />
        <Route path="/services/managed/:param" element={<ManagedService />} />
        <Route path="/services/alml-data-engineering-services/:param" element={<ALMLDataEngineering />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}



