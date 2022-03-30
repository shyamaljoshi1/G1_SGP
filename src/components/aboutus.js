import React from 'react'
import styled from "styled-components";
import imaggg from "../images/Image-5.jpg";

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80vh;
  object-fit: cover;
`;
const AboutUs=()=> {
  return (
    <HeroImage src={imaggg} />
  )
}

export default AboutUs;

