import React from 'react'
import styled from "styled-components";
import imaggg from "../images/Image-5.jpg";
import { Button } from './BTN';

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80vh;
  object-fit: cover;
  border-bottom-left-radius: 4.5rem;
  border-bottom-right-radius: 4.5rem;
  box-shadow: 0px 9px 20px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 768px){
    border-bottom-left-radius: 3rem;
    border-bottom-right-radius: 3rem;
    }
  @media screen and (max-width: 460px){
    border-bottom-left-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;
    }
`;

const HeroAbout = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 160rem;
  width: calc(100%-10rem);
  color: #fff;
  padding: 2rem;
  overflow: hidden;
  bottom: 13rem;
  right: 3rem;
  letter-spacing: 1.5rem;
  text-shadow: 0px 0px 30px #fff;
  @media screen and (max-width: 76.8rem){
    bottom:10rem;
    right: 2rem;
    }
  
`;

const BtnContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 26rem;
  display: flex;
  z-index: 10;
  letter-spacing: 1px;
  justify-content:space-between;
  align-items: center;
  text-align: center ;
  @media screen and (max-width: 768px){
    flex-direction:column;
    right:17rem;
    bottom:-20rem;
  }
  @media screen and (min-width: 770px ) and (max-width: 1024px){
    right:6rem;
  }
  @media screen and (max-width: 530px){
    flex-direction:column;
    right:10rem;
    bottom:-20rem;
  }
  @media screen and (max-width: 426px){
    flex-direction:column;
    right:7rem;
    bottom:-20rem;
  }
  @media screen and (max-width: 376px){
    flex-direction:column;
    right:5rem;
    bottom:-20rem;
  }
  /* @media screen and (max-width: 768px){
    right: 10rem;
  } */
`;
const AboutUs = () => {
  return (
    <>
      <HeroImage src={imaggg} />
      <HeroAbout>
        <h1>PROJECTS</h1>
      </HeroAbout>
      <BtnContainer>
          <Button>
            All 
          </Button>
          <Button>
            Residancial
          </Button>
          <Button>
            Commercial
          </Button>
          <Button>
            Industrial
          </Button>
          <Button>
            Infrastructure
          </Button>
        </BtnContainer>
    </>

  )
}

export default AboutUs;

