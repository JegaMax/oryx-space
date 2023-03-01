import React from 'react';
import styled from 'styled-components';
import '../../style/section.css';
import { auditServices } from '../AppConstants';
function AuditService() {
    return (
        <section id="services" className="services pt-5">
            <HeaderInfo>
                    <h1 className="font40 extraBold textCenter">Audit Service</h1>
                </HeaderInfo>
        <div className="container">
            <div className="row">

                {
                    auditServices.map((service) => (
                    <div className="col-sm-12 col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-5">
                    <div className="icon-box">
                        <div className="icon"><img src={require('../../assets/img/service/' + service.image)} alt=""/></div>
                        <h4 className="title">{service.title}</h4>
                        <p className="description">{service.desc}</p>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    </section>
    );
}

export default AuditService;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
  margin-bottom: 16px;
`;