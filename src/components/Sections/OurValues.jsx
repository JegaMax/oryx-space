import React from 'react';
import styled from 'styled-components';
import Risk from '../../assets/img/value/1.png';
import Cost from '../../assets/img/value/1.png';
import Business from '../../assets/img/value/1.png';
import '../../style/our.value.css';

function OurValue() {
    return (
        <section className='p-4'>
            <Title className="extraBold">The Value we Bring to the Table</Title>
            <div className='wrapper'>
                <div className='d-flex justify-content-around'>
                    <div className='sub-section greyBg'>
                        <h3 className='section-title py-2' data-aos="fade-right" data-aos-duration="2000">
                            Our Vision
                        </h3>
                        <p className='py-4'>
                            Accelerating Businesses in the Digital Age
                        </p>
                    </div>
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
                    <div className='our-value-benefits_content bg-black'>
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
        </section>
    );
}

export default OurValue;

const Title = styled.h3`
  font-size: 40px;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
  opacity: 0.8;
  padding: 8px;
`;