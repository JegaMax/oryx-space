import Footer from "../components/Sections/Footer";
import React from 'react';
import { useParams } from 'react-router-dom';
import CloudEnablementSection from "../components/Services/CloudEnablementSection";

function CloudEnablement() {
  const { param } = useParams();
  if(param){
    return (
      <>
        <CloudEnablementSection param={param}/>
        <Footer />
      </>

    );
  }
   return null;
}

export default CloudEnablement;