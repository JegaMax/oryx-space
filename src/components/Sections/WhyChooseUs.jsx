import React from "react";
import styled from "styled-components";
import { whyChooseUs } from "../AppConstants";

export default function WhyChooseUs() {
  return (
    <Wrapper id="why-choose-us">
      <SubTitle>
        <h3 className='text-center'>“Whether you want to enhance an
          existing application
          or develop a new one, Oryx Space
          caters to all your business needs.”
        </h3>
      </SubTitle>
      <div class="ftrsCntnr">
        <div class="container row mx-auto">
          <div class="lftAdCntnr col-md-6 col-sm-12">
            {whyChooseUs.map((data, index) => (
              <div class="adCard" key={index}>
                <img src={require('../../assets/img/service/' + data.image)} alt="" />
                <h3>{data.title}</h3>
                <p>
                  {data.paragraph}
                </p>
              </div>
            ))}
          </div>
          <div class="rtAdCntnr col-md-6 col-sm-12">
            <img src={require("../../assets/img/contact-1.png")} class="w-100 adLpImg" alt="" />
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




