import React from "react";
import styled from "styled-components";
import { whyChooseUs } from "../AppConstants";

export default function WhyChooseUs() {
  return (
    <Wrapper id="why-choose-us">
      <SubTitle className="d-flex justify-content-center">
        <h3 className='text-center w-75'>“Our core capabilities in Managed Services Migration, Integration, Admin Services, Data
Management, Workflow Management, Enhancements and Advisory Services”.
        </h3>
      </SubTitle>
      <div className="ftrsCntnr">
        <div className="container row mx-auto">
          <div className="lftAdCntnr col-md-6 col-sm-12">
            {whyChooseUs.map((data, index) => (
              <div className="adCard" key={index}>
                <img src={require('../../assets/img/service/' + data.image)} alt="" data-aos="zoom-in" />
                <h3>{data.title}</h3>
                <p>
                  {data.paragraph}
                </p>
              </div>
            ))}
          </div>
          <div className="rtAdCntnr col-md-6 col-sm-12">
            <img src={require("../../assets/img/contact-1.png")} className="w-100 adLpImg" alt="" data-aos="fade-up-left" data-aos-duration="2000"/>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const SubTitle = styled.div`
margin-top:16px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;




