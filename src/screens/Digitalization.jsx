import Footer from "../components/Sections/Footer";
import React from 'react';
import { useParams } from 'react-router-dom';
import DigitalizationSection from "../components/Services/DigitalizationSection";

function Digitalization() {
  const { param } = useParams();
  if(param){
    return (
      <>
        <DigitalizationSection param={param}/>
        <Footer />
      </>

    );
  }
   return null;
}

export default Digitalization;