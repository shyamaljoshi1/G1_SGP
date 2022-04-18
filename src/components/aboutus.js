import React from 'react'
import styled from "styled-components";
import imaggg from "../images/Image-7.jpg";

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
  position: absolute;  
`;

const HeroOwner = styled.div`
  position: relative;
  z-index: 777;
  display: flex;
  flex-direction: column;
  top: -50px;
  padding-left:90px;
  letter-spacing: 3px;
  padding-right:23px;

  c1{
    font-size: 2rem;
    font-weight: bold;
    padding-left:90px;
    padding-bottom: 30px;
    letter-spacing: 5px;
    
  }
  c2{
    padding-left: 140px;
    font-weight: bold;
    padding-bottom: 30px;
    font-size: 1.4rem;
    opacity:80%;
  }
  c3{
    padding-left: 190px;
    padding-right: 190px;
    padding-bottom:10px;
    font-size: 1rem;
    letter-spacing:2px;
    opacity:70%;

  }
  c4{
    padding-top:12px;
    padding-left:150px;
  }
`;
const HeroContent = styled.div`
  position: relative;
  top: 50%;
`;
const HeroHistory = styled.div`
  position: relative;
  z-index: 777;
  display: flex;
  flex-direction: column;
  top: -10px;
  padding-left:90px;
  letter-spacing: 3px;
  padding-right:23px;

  a1{
    font-size: 2rem;
    font-weight: bold;
    padding-left:90px;
    padding-bottom: 30px;
    letter-spacing: 5px;
    
  }
  a3{
    padding-top:12px;
    padding-left:150px;
  }
  a2{
    padding-left: 150px;
    padding-right:150px;
    font-size: 1.2rem;
    letter-spacing: 3.5px;
    padding-bottom: 0px;
    opacity:70%;
  }
`;
const HeroDos = styled.div`
  position: relative;
  z-index: 777;
  display: flex;
  flex-direction: column;
  top: -50px;
  padding-left:90px;
  letter-spacing: 3px;
  padding-bottom: 12px;
  padding-right:23px;

  b1{
    font-size: 2rem;
    font-weight: bold;
    padding-left:18px;
    padding-bottom: 30px;
    letter-spacing: 5px;
    
  }
  b3{
    padding-top:12px;
    padding-left:85px;
  }
  b2{
    padding-left: 100px;
    padding-right:100px;
    padding-bottom: 8px;
    font-size: 1.2rem;
    opacity:70%;
  }
`;
// const Title = styled(h1)`
// color: ${themes.dark.text1};
// background : linear-gradient(180deg, #ffd7ff 0%, #301cbe 100%);
// background-clip: text;
// -webkit-background-clip: text;
// color: transparent;
// span{

// background : linear-gradient(180deg, #ffd7ff 0%, #301cbe 100%);
// background-clip: text;
// -webkit-background-clip: text;
// color: transparent;
// @media (max-width:450px){
//   font-size:48px ;
// }
// }
// `

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
                <a3>{data.icon1}</a3>
                <a1>{data.his}</a1>
                <a2>{data.gen}</a2>
                <a2>{data.gen2}</a2>
              </HeroHistory>
              <HeroOwner>
                <c4>{data.icon3}</c4>
                <c1>{data.title1}</c1>
                <c2>{data.title2}</c2>
                <c3>{data.dos1}</c3>
                <c3>{data.dos2}</c3>
                <c3>{data.dos3}</c3>
                <c3>{data.dos4}</c3>
                <c3>{data.dos5}</c3>
                <c3>{data.dos6}</c3>
                <c3>{data.dos7}</c3>
              </HeroOwner>
              <HeroDos>
                <b3>{data.icon2}</b3>
                <b1>{data.title}</b1>
                <b2>{data.do1}</b2>
                <b2>{data.do2}</b2>
                <b2>{data.do3}</b2>
                <b2>{data.do4}</b2>
                <b2>{data.do5}</b2>
                <b2>{data.do6}</b2>
                <b2>{data.do7}</b2>
              </HeroDos>

            </HeroContent>
          );
        })
      }
      </HeroData>

      
    </>
  )
}
  


export default AboutUs;

