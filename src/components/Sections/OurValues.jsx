import React from 'react';
import styled from 'styled-components';
import Risk from '../../assets/img/value/1.png';
import Cost from '../../assets/img/value/1.png';
import Business from '../../assets/img/value/1.png';
import '../../style/section.css';

function OurValue() {
    return (
        <section id="our-values">
            <div className='p-4 container'>
                <HeaderInfo>
                    <h1 className="font40 extraBold textCenter">The Value we Bring to the Table</h1>
                </HeaderInfo>
                <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3 py-4">
                        <div className="sub-section greyBg">
                            <h3 className='section-title py-2' data-aos="fade-right" data-aos-duration="2000">
                                Our Vision
                            </h3>
                            <p className='py-4'>
                                Accelerating Businesses in the Digital Age
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 py-4">
                        <div className='sub-section coralBg'>
                            <h3 className='section-title py-2' data-aos="fade-right" data-aos-duration="2000">
                                Our Mission
                            </h3>
                            <p className='py-4'>
                                Creating a thriving environment for our
                                employees to grow and prosper in the
                                era of digital innovation, by reimagining
                                future processes, to become essential
                                trusted partners to our customers.
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-5 col-lg-5 py-4">
                        <div className='sub-section darkBg'>
                            <h3 className='whiteColor'>Enjoy our-value Banking Benefits</h3>
                            <div className='our-value-benefits_items'>
                                <div className='benefit' data-aos="fade-down" data-aos-duration="2000">
                                    <img src={Risk} alt='' />
                                    <h5 className='whiteColor'>Dedicated Relationship Manager</h5>
                                </div>
                                <div className='benefit' data-aos="fade-left" data-aos-duration="2000">
                                    <img src={Cost} alt='' />
                                    <h5 className='whiteColor'>Distinct Lending Solutions</h5>
                                </div>
                                <div className='benefit' data-aos="fade-up" data-aos-duration="2000">
                                    <img src={Business} alt='' />
                                    <h5 className='whiteColor'>Wealth Management Solutions</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurValue;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;