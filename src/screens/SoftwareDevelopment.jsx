import Footer from '../components/Elements/Footer';
import React from 'react';
import { useParams } from 'react-router-dom';
import SoftwareDevelopmentSection from "../components/Services/SoftwareDevelopmentSection";

function SoftwareDevelopment() {
  const { param } = useParams();
  if(param){
    return (
      <>
        <SoftwareDevelopmentSection param={param}/>
        <Footer />
      </>

    );
  }
   return null;
}

export default SoftwareDevelopment;