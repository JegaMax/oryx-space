import Footer from "../components/Sections/Footer";
import React from 'react';
import { useParams } from 'react-router-dom';
import ALMLDataEngineeringSection from "../components/Services/ALMLDataEngineeringSection";

function ALMLDataEngineering() {
  const { param } = useParams();
  if(param){
    return (
      <>
        <ALMLDataEngineeringSection param={param}/>
        <Footer />
      </>

    );
  }
   return null;
}

export default ALMLDataEngineering;