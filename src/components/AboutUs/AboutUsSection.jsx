import React from 'react';
import styled from 'styled-components';
import '../../style/section.css';
import { digitalMediaAndServices } from '../AppConstants';
import { aboutUsSections } from '../AppConstants';
import NavigationTabs from './NavigationTabs';
function AboutUsSection({ param }) {
    const item = aboutUsSections.find((item) => item['id'] === param);

    const otherSections = aboutUsSections
        .filter((item) => item['id'] !== param)
        .map((item) => item.title, item.url);

    return (
        <div className='p-4 container'>
            <NavigationTabs navigationLinks={otherSections} />
            <HeaderInfo>
                <h1 className="font40 extraBold textCenter">{item.title}</h1>
            </HeaderInfo>
            <SubTitle>
                <h3 className='text-center'>{item.subTitle}
                </h3>
            </SubTitle>
            <div className="cardscontainer">
                {digitalMediaAndServices.map((service, index) => (
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 py-4 card-container" key={index}>
                        <div className="software-card">
                            <img className='iconbox' data-aos="fade-right" data-aos-duration="2000" src={require('../../assets/img/service/' + service.image)} alt={service.title}>
                            </img>
                            <p className='py-4'>
                                {service.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUsSection;

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