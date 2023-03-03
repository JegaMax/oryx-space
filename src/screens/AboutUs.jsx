import Footer from "../components/Elements/Footer";
import React from 'react';
import { useParams } from 'react-router-dom';
import AboutUsSection from '../components/AboutUs/AboutUsSection';

function AboutUs() {
  const { param } = useParams();
  if(param){
    return (
      <>
        <AboutUsSection param={param}/>
        <Footer />
      </>

    );
  }
   return null;
}

export default AboutUs;