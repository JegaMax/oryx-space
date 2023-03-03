import Footer from "../components/Elements/Footer";
import React from 'react';
import { useParams } from 'react-router-dom';
import QualityEngineeringSection from "../components/Services/QualityEngineeringSection";

function QualityEngineering() {
  const { param } = useParams();
  if(param){
    return (
      <>
        <QualityEngineeringSection param={param}/>
        <Footer />
      </>

    );
  }
   return null;
}

export default QualityEngineering;