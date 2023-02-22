import React from 'react';
import styled from 'styled-components';
import '../../style/section.css';
import Data from '../../data/SoftwareDevelopment.json'
function SoftwareDevelopment() {
    return (
        <section id="our-values">
            <div className='p-4 container'>
                <HeaderInfo>
                    <h1 className="font40 extraBold textCenter">The Value we Bring to the Table</h1>
                </HeaderInfo>
                <div className="cardscontainer">
                {Data.map((development) =>(
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 py-4">
                        <div className="software-card">
                            <img className='iconbox' data-aos="fade-right" data-aos-duration="2000" src={require('../../assets/img/development/'+development.image)} alt={development.title}>
                            </img>
                            <p className='py-4'>
                                Accelerating Businesses in the Digital Age
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