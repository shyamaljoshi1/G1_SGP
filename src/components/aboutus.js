import React from 'react'
import styled from "styled-components";
import imaggg from "../images/Image-5.jpg";

// const HeroPage = styled.div`
//   position: absolute;
// overflow: hidden;
// `;

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

const HeroContent = styled.div`
   position: relative;
   top: 50%;
`;
const HeroHistory = styled.div`
  position: relative;
  z-index: 777;
  display: flex;
  top:-1.7rem;
  flex-direction: column;
  /* top: 100px; */
  padding-left:23px;
  /* padding-top: 12px; */
  padding-bottom: 12px;
  padding-right:23px;
  /* justify-content: flex; */
  /* justify-self: center; */
  h1{
    font-size: 2rem;
    font-weight: bold;
  }
`;
const HeroDos = styled.div`
  position: relative;
`;

const AboutUs = ({ about }) => {
  return (
    <>
      <HeroImage src={imaggg} />
      <HeroAbout>
        <h1>ABOUT RESOULTE CONSULTANTS</h1>
      </HeroAbout>

      <HeroData>
        {about.map((data) => {
          return (
            <HeroContent>
              <HeroHistory>
                <h1>{data.his}</h1>
                <h2>{data.gen}</h2>
                <h2>{data.gen2}</h2>
              </HeroHistory>
              <HeroDos>
                <h3>{data.do1}</h3>
                <h3>{data.do2}</h3>
                <h3>{data.do3}</h3>
                <h3>{data.do4}</h3>
                <h3>{data.do5}</h3>
                <h3>{data.do6}</h3>
                <h3>{data.do7}</h3>
              </HeroDos>
              {/* <h1>{data.title}</h1> */}
              {/* <p>{data.desp}</p> */}
            </HeroContent>
          );
        })
        }
      </HeroData>
    </>
  )
}

export default AboutUs;

