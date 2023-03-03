import Footer from "../components/Elements/Footer";
import React from 'react';
import { useParams } from 'react-router-dom';
import ManagedServiceSection from "../components/Services/ManagedServiceSection";

function ManagedService() {
  const { param } = useParams();
  if(param){
    return (
      <>
        <ManagedServiceSection param={param}/>
        <Footer />
      </>

    );
  }
   return null;
}

export default ManagedService;