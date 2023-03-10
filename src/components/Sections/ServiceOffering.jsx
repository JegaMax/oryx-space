import React from 'react';
import styled from 'styled-components';
import '../../style/section.css';
import { serviceOffering } from '../AppConstants';
function AuditService() {
    return (
        <section id="services" className="services pt-5">
            <HeaderInfo>
                <h1 className="font40 extraBold textCenter">Our Services</h1>
            </HeaderInfo>
            <div className="container">
                <div className="row">
                    {
                        serviceOffering.map((service) => (
                            <div className="col-sm-12 col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-5">
                                <a href={service.url} >
                                    <div className="icon-box">
                                        <div className="icon"><img src={require('../../assets/svg/' + service.image)} alt="" /></div>
                                        <h4 className="title">{service.title}</h4>
                                        <p className="description">{service.desc}</p>
                                    </div>
                                </a>
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