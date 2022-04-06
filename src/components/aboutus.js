import React from 'react'
import styled from "styled-components";
import imaggg from "../images/Image-5.jpg";

const HeroPage = styled.div`
  position: absolute;
  // overflow: hidden;
`;

// const HeroImage = styled.img`
//   position: relative;
//   top: 0;
//   left: 0;
//   width: 142%;
//   height: 080vh;
//   object-fit: cover;
//   border-bottom-left-radius: 45px;
//   border-bottom-right-radius: 45px;
//   box-shadow: 0px 9px 20px rgba(0, 0, 0, 0.5);
//     @media screen and (max-width: 768px) {
//     border-bottom-left-radius: 30px;
//     border-bottom-right-radius: 30px;
//   }
//     @media screen and (max-width: 460px) {
//     border-bottom-left-radius: 25px;
//     border-bottom-right-radius: 25px;
//   }
//   `;

// const HeroAbout = styled.div`
//   position: relative;
//   z-index: 10;
//   display: flex;
//   flex-direction: column;
//   max-width: 1600px;
//   width: calc(100%-100px);
//   color: #fff;
//   padding: 20px;
//   overflow: hidden;
//   bottom: 12rem;
//   left: 38rem;
//   letter-spacing: 15px;
//   text-shadow: 0px 0px 30px #fff;
// `;
const HeroImage = styled.img`
  position: relative;
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
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100%-100px);
  color: #fff;
  padding: 20px;
  overflow: hidden;
  bottom: 11rem;
  right: -35rem;
  letter-spacing: 15px;
  text-shadow: 0px 0px 30px #fff;
  @media screen and (max-width: 768px){
    bottom:10rem;
    right: 2rem;
    }
`;
const HeroData = styled.div`
  width: fit-content;
  height: fit-content; 
  top: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  // background: #fff;
  position: absolute;  
`;

// const HeroContent = styled.div`
//   // position: relative;
//   // top: 50%;

// `;

const AboutUs = ({ about }) => {
  return (
    <HeroPage>
      <HeroImage src={imaggg} />
      <HeroAbout>
        <h1>ABOUT RESOULT CONSULTANTS</h1>
      </HeroAbout>

      {/* <HeroData>
        {about.map((data) => {
          return (
            <HeroContent>
              <h1>{data.title}</h1>
              <p>{data.desp}</p>
            </HeroContent>
          );
        })
        }
      </HeroData> */}
    </HeroPage>
  )
}

export default AboutUs;

