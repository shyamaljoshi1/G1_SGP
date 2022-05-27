import React, { useState, useRef , useEffect} from "react";
import styled, { css } from "styled-components";
import { Button } from "./Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;



const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }

`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  animation: moveInFromRight 2s ease-in-out;

  @keyframes moveInFromRight {
    0% {
        opacity: 0.8;
        /* transform: translateY(10rem); */
    }
    50%{
      transform: scale(1.08);
      opacity:1;
    }
    100% {
        opacity: 1;
        /* transform: scale(1); */
    }
  }
`;
const HeroContent = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 160rem;
  width: calc(100%-100px);
  min-width: 38rem;
  color: #fff;
  /* background: #000000b8; */
  background: rgba( 47, 47, 45, 0.45 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  /* background:#00000038; */
  padding: 2rem;
  /* border-radius:20px; */
  overflow: hidden;
  bottom: 10rem;
  left: 6rem;
  animation: moveInFromLeft 1.6s ease-in-out;

  @keyframes moveInFromLeft {
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }
    80% {
        transform: translateX(1rem);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
  }

  h1 {
    font-size: clamp(3rem, 8vh, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: clamp(1.4rem, 4vh, 1.2rem);
    margin-bottom: 1.2rem;
    font-weight: 200;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 5rem;
  display: flex;
  z-index: 10;
`;

const arrowbutton = css`
  width: 5rem;
  height: 5rem;
  color: #fff;
  border-radius: 5rem;
  cursor: pointer;
  background: #000d1a;
  padding: 1rem;
  margin-right: 2rem;
  user-select: none;
  transition: 0.2s;
  
  &:hover {
    background: #17ada8;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowbutton}
`;
const NextArrow = styled(IoArrowForward)`
  ${arrowbutton}
`;

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(
    ()=>{
      const NextSlide = () => {
        setCurrent(current => (current===length-1?0:current+1));
      };

      timeout.current = setTimeout(NextSlide,3000);
      return function(){
        if(timeout.current) {
          clearTimeout(timeout.current);
        }
      };
    },
    [current, length]
  )

  const NextSlide = () => {
    if(timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const PrevSlide = () => {
    if(timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if(!Array.isArray(slides) || slides.length<=0){
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
            {index===current && (
              <HeroSlider >
                <HeroImage src={slide.image} alt={slide.alt} />
                <HeroContent >
                  <h1>{slide.title}</h1>
                  <p>{slide.location}</p>
                  <Button to={slide.path} primary="true">
                    {slide.lable}
                    <Arrow />
                  </Button>
                </HeroContent>
              </HeroSlider>
            )}
              
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={PrevSlide}/>
          <NextArrow onClick={NextSlide}/>
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
