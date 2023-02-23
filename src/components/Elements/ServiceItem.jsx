import React from "react";
import styled from "@emotion/styled";

const ProgramCard = ({ title, icon, text }) => {
  return (
    <ProgramsWrapper>
    <StyledProgramDiv>
      {/* <span className="iconWrap"> */}
      {/* <FontAwesomeIcon icon={icon} className="try" /> */}
      {/* </span> */}
      <h4>{title}</h4>
      <p>{text}</p>
    </StyledProgramDiv>
    </ProgramsWrapper>
  );
};

export default ProgramCard;

const StyledProgramDiv = styled.div`
  /* text-align: center; */
  width: 300px;
  height: 350px;

  @media (max-width: 700px) {
    width: 100%;
    padding: 2em 0;
    height: auto;
  }

  .iconWrap {
  }
  .try {
    font-size: 38px;
    margin-bottom: 20px;
    transition: all 0.5s;
    color: #fff;
    width: 100px;
    height: 100px;
    padding: 30px 0;
    border-radius: 50%;
    /* background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%); */
    background: #004aad;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);
  }
  h4 {
    padding: 2em 0 1em 0;
  }
`;


const ProgramsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Wrap = styled.div`
  background: #f6f6f6;
`;
