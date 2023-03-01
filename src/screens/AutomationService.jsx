import Footer from "../components/Sections/Footer";
import React from 'react';
import { useParams } from 'react-router-dom';
import AutomationServiceSection from "../components/Services/AutomationServiceSection";

function AutomationService() {
  const { param } = useParams();
  if(param){
    return (
      <>
        <AutomationServiceSection param={param}/>
        <Footer />
      </>

    );
  }
   return null;
}

export default AutomationService;