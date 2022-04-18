import React from 'react'
import styled from "styled-components";
import imaggg from "../images/Image-7.jpg";
import { Random } from 'react-animated-text';

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80vh;
  object-fit: cover;
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;
  box-shadow: 0px 9px 20px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 768px){
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    }
  @media screen and (max-width: 460px){
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    }
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
  @media screen and (max-width: 984px){
    bottom:11rem;
    left: 13rem;
    }
  @media screen and (max-width: 768px){
    bottom:10rem;
    left: 13rem;
    }
    @media screen and (max-width: 655px){
    bottom:9rem;
    left: 8rem;
    }
    @media screen and (max-width: 579px){
    bottom:9rem;
    left: 4rem;
    }
    @media screen and (max-width: 513px){
    bottom:9rem;
    left: 2rem;
    }
    @media screen and (max-width: 479px){
    bottom:9rem;
    left: 1rem;
    }
    @media screen and (max-width: 462px){
    bottom:9rem;
    left: 1rem;
    letter-spacing: 10px;
    font-size:0.8rem;
    }
    @media screen and (max-width: 415px){
    bottom:9rem;
    }
`;






const Career = () => {
  return (
    <>
      <HeroImage src={imaggg} />
      <HeroAbout>
        {/* <h1>ABOUT RESOULTE CONSULTANTS</h1> */}
        <h1><Random text="ABOUT RESOULTE CONSULTANTS"   effect="verticalFadeOut" effectDirection="down" effectChange={3.0}/></h1>
      </HeroAbout>
    </>
  )
}

export default Career;

