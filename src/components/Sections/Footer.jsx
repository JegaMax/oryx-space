import React from "react";
import styled from "styled-components";
import envelope from '../../assets/svg/envelope.svg';
import phone from '../../assets/svg/phone.svg';
import globe from '../../assets/svg/globe.svg';


export default function Contact() {

  return (
    <Wrapper>
      <div class="container">
				<p>&nbsp; </p><br/>
				<div class="row letsmake">
					<div class="col-lg-12">
						<h3>Let's make something great together</h3>
					</div>
					<div class="col-lg-12 col-md-12 d-flex justify-content-center mb-3">
						<div class="icon"><img src={phone} alt="phone" /></div>
						<h4><span>Call Us:</span>+974 66963360/70977928</h4>
					</div>
					<div class="col-lg-6 col-md-6 d-flex justify-content-center">
						<div class="icon"><img src={envelope} alt="email" /></div>
						<h4><span>Email:</span> <a href="mailto:business@oryxspace.tech">business@oryxspace.tech</a></h4>
					</div>
					<div class="col-lg-6 col-md-6 d-flex justify-content-center">
						<div class="icon"><img src={globe} alt="web" /></div>
						<h4><span>Web:</span> <a href="http://www.oryxspace.tech" target="_blank" rel="noreferrer">www.oryxspace.tech</a></h4>
					</div>
				</div>
			</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;