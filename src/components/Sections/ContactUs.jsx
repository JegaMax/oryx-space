import React from "react";
import envelope from '../../assets/svg/envelope.svg';
import phone from '../../assets/svg/phone.svg';
import globe from '../../assets/svg/globe.svg';


export default function ContactUs() {

	return (
		<div className="orange-bg">
				<p>&nbsp; </p><br />
				<div className="row letsmake">
					<div className="col-lg-12">
						<h3>Let's make something great together</h3>
					</div>
					<div className="col-lg-12 col-md-12 d-flex justify-content-md-center mb-3">
						<div className="icon"><img src={phone} alt="phone" /></div>
						<h4><span>Call Us:</span>+974 66963360/70977928</h4>
					</div>
					<div className="col-lg-6 col-md-6 d-flex justify-content-md-center">
						<div className="icon"><img src={envelope} alt="email" /></div>
						<h4><span>Email:</span> <a href="mailto:business@oryxspace.tech">business@oryxspace.tech</a></h4>
					</div>
					<div className="col-lg-6 col-md-6 d-flex justify-content-md-center">
						<div className="icon"><img src={globe} alt="web" /></div>
						<h4><span>Web:</span> <a href="http://www.oryxspace.tech" target="_blank" rel="noreferrer">www.oryxspace.tech</a></h4>
					</div>
				</div>
		</div>
	);
}
