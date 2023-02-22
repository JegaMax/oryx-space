import React from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/autoplay'
// import Container from 'components/Container';
import PARTNER_LOGOS from '../../data/OurPartners.json'

export default function OurPartners() {
  return (
    <PartnersWrapper className='lightBg py-4'>
      <Title className='p-4 extraBold'>Tailored Solutions from Our Partners</Title>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={40}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
        speed={3000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1025: { slidesPerView: 6 },
        }}
        className="w-75"
      >
        {PARTNER_LOGOS.map((logo) => (
          <SwiperSlide key={logo}>
          <LogoWrapper className="flexCenter">
          <ImgStyle src={require('../../assets/img/clients/'+ logo.image)} alt={logo.title} />
        </LogoWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnersWrapper>
  );
}

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

const PartnersWrapper = styled.div`
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    user-select: none;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;