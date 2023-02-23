import React from 'react';
import styled from 'styled-components';
import '../../style/section.css';
import { softwareDevelopment } from '../AppCoanstants';
function SoftwareDevelopment() {
    return (
        <section id="our-values">
            <div className='p-4 container'>
                <HeaderInfo>
                    <h1 className="font40 extraBold textCenter">Software Development</h1>
                </HeaderInfo>
                <SubTitle>
                    <h3 className='text-center'>“Whether you want to enhance an
existing application
or develop a new one, Oryx Space
caters to all your business needs.”
</h3>
                </SubTitle>
                <div className="cardscontainer">
                {softwareDevelopment.map((development) =>(
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 py-4 card-container">
                        <div className="software-card">
                            <img className='iconbox' data-aos="fade-right" data-aos-duration="2000" src={require('../../assets/img/development/'+development.image)} alt={development.title}>
                            </img>
                            <p className='py-4'>
                                {development.title}
                            </p>
                        </div>
                    </div>
                ))}
                    </div>
            </div>
        </section>
    );
}

export default SoftwareDevelopment;

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