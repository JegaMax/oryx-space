import React from 'react';
import styled from 'styled-components';
import '../../style/section.css';
import Risk from '../../assets/img/value/1.png';
import Cost from '../../assets/img/value/1.png';
import Business from '../../assets/img/value/1.png';
import { atOurGlance } from '../AppConstants';
function AtOurGlance() {
    return (
        <section id="services" class="services pt-5">
            <HeaderInfo>
                    <h1 className="font40 extraBold textCenter">At Our Glance</h1>
                </HeaderInfo>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-5 ">
                    <div class="icon-box">
                        <div class="icon"><i class="bx bx-mobile-alt"></i></div>
                        <h4 class="title">MOBILE APP DEVELOPMENT</h4>
                        <p class="description">We employ masterful techniques to make mobile app development process a total success. We are competent enough to cater to your mobile app development needs expertly.</p>
                    </div>
                </div>

                {
                    atOurGlance.map((service) => (
                    <div class="col-sm-12 col-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-5">
                    <div class="icon-box">
                        <div class="icon"><i class="bx bx-devices"></i></div>
                        <h4 class="title">{service.title}</h4>
                        <p class="description">{service.desc}</p>
                        {
                    service.service_items.map((item) => (
                        <div className='service_items'>
                                <div className='benefit' data-aos={item.animation} data-aos-duration="2000">
                                    <img src={item.image} alt='' />
                                    <h5>{item.title}</h5>
                                </div>
    
                            </div>
                    ))}
                    </div>
                </div>
                    ))
                }
                

                <div class="col-sm-12 col-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-5 ">
                    <div class="icon-box">
                        <div class="icon"><i class="bx bx-tachometer"></i></div>
                        <h4 class="title">ECOMMERCE DEVELOPMENT</h4>
                        <p class="description">Get A-one and wide-ranging UX/UI designs from us. We deploy innovative internet app technologies to come up with best UX/UI design for you.</p>
                    </div>
                </div>

                <div class="col-sm-12 col-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-5">
                    <div class="icon-box">
                        <div class="icon"><i class="bx bx-book-bookmark"></i></div>
                        <h4 class="title">QA &amp; AUDIT SERVICE</h4>
                        <p class="description">Our QA &amp; Audit services aid our clients to ensure the veracity of their proven trials. We counsel clients on how to substantiate the integrity of scientific data and other related things.</p>
                    </div>
                </div>

                <div class="col-sm-12 col-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-5 ">
                    <div class="icon-box">
                        <div class="icon"><i class="bx bx-world"></i></div>
                        <h4 class="title">CONTENT PUBLISHING</h4>
                        <p class="description">We offer engaging, value-added content &amp; publishing services that scale sales growth, rationalize operations, and ensure editorial quality at the best.</p>
                    </div>
                </div>

                <div class="col-sm-12 col-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-5 ">
                    <div class="icon-box">
                        <div class="icon"><i class="bx bx-code-alt"></i></div>
                        <h4 class="title">IT CONSULTING</h4>
                        <p class="description">Our IT consulting can help your organization perform exceptionally highly and let you deal with day-to-day business operations excellently.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
}

export default AtOurGlance;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
  margin-bottom: 16px;
`;