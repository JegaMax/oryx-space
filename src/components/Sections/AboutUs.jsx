import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import '../../style/section.css';
import AboutUsSection from '../AboutUs/AboutUsSection';

function AboutUs() {
  const { urlParam } = useParams();
    return (
        <AboutUsSection param={urlParam}/>
    );
}

export default AboutUs;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const SubTitle = styled.div`
margin-top:16px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;