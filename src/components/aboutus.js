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
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 0px 9px 20px rgba(0, 0, 0, 0.5);
  `;

const HeroAbout = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100%-100px);
  color: #fff;
  padding: 20px;
  overflow: hidden;
  bottom: 13rem;
  right: 3rem;
  letter-spacing: 15px;
  text-shadow: 0px 0px 30px #fff;
`
const AboutUs = () => {
  return (
    <>
      <HeroImage src={imaggg} />
      <HeroAbout>
        <h1>ABOUT RESOULT CONSULTANTS</h1>
      </HeroAbout>
      
    </>

  )
}

export default AboutUs;

