import React from 'react';
import styled from 'styled-components';
import '../../style/section.css';
import Risk from '../../assets/img/service/1.png';
import Cost from '../../assets/img/service/1.png';
import Business from '../../assets/img/service/1.png';
function ValueBringing() {
    return (
        <section id="digital-media-service lightBg">
            <div className='p-4 container'>
                <HeaderInfo>
                    <h1 className="font40 extraBold textCenter">The Value we Bring to the Table</h1>
                </HeaderInfo>
                <div class="contents">
                    <div class="container py-3">
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="row">
                                    <div class="col-lg-6 d-flex justify-content-center">

                                        <div>
                                            <div class="each-content shadow p-4" data-aos="zoom-in">
                                                <center><img src={Risk} alt='' class="img-fluid" /></center>
                                                <h4 class="text-center mt-3 fs-5">Minimizing Risk</h4>
                                            </div>
                                            <div class="each-content shadow p-4 mt-5" data-aos="zoom-in" data-aos-delay="350">
                                                <center><img src={Cost} alt='' class="img-fluid" /></center>
                                                <h4 class="text-center mt-3 fs-5">Minimizing Cost</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="500">
                                        <div class="each-content shadow p-4">
                                            <center><img src={Business} alt='' class="img-fluid" /></center>
                                            <h4 class="text-center mt-3 fs-5">Maximizing Business Values</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col lg-5 d-flex align-items-center mt-5 mt-lg-0 text-center text-lg-start" data-aos="fade-up">
                                {/* <div class="div">
                        <h5>Your Ultimate Platform</h5>
                        <h1 class="display-4 fw-bold">A Better <span class="text-primary fw-bold">#Website</span> Means
                            a Better User Experience</h1>
                        <h5>We are among the few companies who can provide the Best Website Development Services in
                            Bangalore Karnataka based on the Client requirements at affordable prices.</h5>
                        <a href="web-development-company-in-bangalore.html" class="btn btn-outline-primary text-black px-5 fs-5 mt-4">READ MORE</a>
                    </div> */}
                                <div className="sub-section">
                                    <div className="py-md-4">
                                    <h3 className='section-title py-2' data-aos="fade-left" data-aos-duration="2000">
                                        Our Vision
                                    </h3>
                                    <p className='py-4'>
                                        Accelerating Businesses in the Digital Age
                                    </p>
                                    </div>
                                    <div className="py-md-4">
                                    <h3 className='section-title py-2' data-aos="fade-left" data-aos-duration="2000">
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
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ValueBringing;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;