import Footer from "../components/Elements/Footer";
import React from 'react';
import { useParams } from 'react-router-dom';
import AuditServiceSection from "../components/Services/AuditServiceSection";

function AuditService() {
  const { param } = useParams();
  if(param){
    return (
      <>
        <AuditServiceSection param={param}/>
        <Footer />
      </>

    );
  }
   return null;
}

export default AuditService;