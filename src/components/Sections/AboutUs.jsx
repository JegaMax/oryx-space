import React from 'react';
import styled from 'styled-components';
import '../../style/section.css';

function AboutUs() {
    return (
        <section id="about-us lightBg">
            <div class="services scrollable-section active-section" data-section-title="Services" id="scrollto-section-2">
			<div class="grey-bg">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<h2 class="" data-animation="fadeInUp" >Our Services</h2>
							<div class="herotext " data-animation="fadeInUp" data-animation-delay="400">We have successfully delivered thousands of projects covering a wide range of industries from simple websites to complete e-commerce platforms and 
powerful bespoke, business critical web applications. Our procedures are designed to provide a structured process which is simple, supportive, 
informative and flexible.<br/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="row services-tabs">
					<div class="col-sm-6 col-lg-6 pull-right">
						<ul class="nav nav-pills nav-stacked">
							<li class="animated active fadeInUp visible" data-animation="fadeInUp" data-animation-delay="600">
								<div class="point"></div>
								<a href="#web" data-toggle="tab" title="">
									<div class="icon"><i class="fa fa-desktop"></i></div>
									<div class="info">
										<h3>What We Make</h3>
										<div class="description">We make the web simple for the users. We have made significant changes by the way we relate to the upcoming technologies.<br/>
										</div>
									</div>
								
								</a>
							</li>
							<li class="" data-animation="fadeInUp" data-animation-delay="1000">
								<div class="point"></div>
								<a href="#photography" data-toggle="tab" title="">
									<div class="icon"><i class="fa fa-camera"></i></div>
									<div class="info">
										<h3>Why Us</h3>
										<div class="description">We think differently. We like to think that our services stand out from the competition as we are passionate about the performance.<br/>
										</div>
									</div>
								</a>
							</li>
						</ul>
					</div>
					<div class="col-sm-6 col-lg-6 pull-left">
						<div class="tab-content">
							<div class="tab-pane fade in active" id="web">
								<h3 class="animated fadeInRight visible"  >What We Do<br/>
								</h3>
								<h1 class="animated fadeInRight visible"  data-animation-delay="400">	We transform people’s perception into reality </h1>
								<div class="description"  data-animation-delay="800"><span class="animated undefined visible">We approach the hard-to-reach brand decision, sensitively and intelligently as an extension of emerging technologies.</span></div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
        </section>
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