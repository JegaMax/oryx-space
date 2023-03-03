import Footer from "../components/Elements/Footer";
import React from 'react';
import { useParams } from 'react-router-dom';
import BusinessProcessSection from "../components/Services/BusinessProcessSection";

function BusinessProcess() {
  const { param } = useParams();
  if(param){
    return (
      <>
        <BusinessProcessSection param={param}/>
        <Footer />
      </>

    );
  }
   return null;
}

export default BusinessProcess;