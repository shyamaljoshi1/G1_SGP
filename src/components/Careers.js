import React from 'react'
import styled from "styled-components";
import imaggg from "../images/Image-8.jpg";
import { AiOutlineFileSearch } from "react-icons/ai";

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

const Careerh = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100%-100px);
  color: #fff;
  padding: 20px;
  overflow: hidden;
  bottom: 14rem;
  right: 10rem;
  letter-spacing: 20px;
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
const GForm = styled.div`
  
  position: relative;
  top: 50%;
`;
const Formdata =styled.div`
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
  a2{
    padding-left: 150px;
    padding-right:150px;
    font-size: 1.2rem;
    letter-spacing: 3.5px;
    padding-bottom: 0px;
    opacity:70%;
  }
  a3{
    padding-top:12px;
    padding-left:150px;
  }
`;

const CareerData = styled.div`
  width: fit-content;
  height: fit-content; 
  top: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  position: absolute;  
  a{
    text-decoration: none;
    border: solid black 1px ;
    border-radius: 8px;
    padding: 10px 25px;
    margin: 30px;
    transition:0.2s;

  }
  a:visited
  {
    color: black ;
  }
  a:hover
  {
    background-color:black;
    color: white;
    transform:translateY(-2px);
  }
`;






const Career = () => {
  return (
    <>
      <HeroImage src={imaggg} />
      <Careerh>
        <h1>CAREER</h1>
      </Careerh>
      <CareerData>
        <GForm>
          <Formdata>
                  <a3>{<AiOutlineFileSearch size={50}/>}</a3>
                  <a1>Internship / Jobs</a1>
                  <a2>RESOULTE CONSULTANTS believes in the upliftment of society by training future and upcoming engineers who are going to take the nation forward. We are looking for young technical interns/people, professional in their demeanour, eager to learn, willing to contribute to the growth of themselves along with the firm and have sound morals and ethics.</a2>
          </Formdata>
        </GForm>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc1R8uXwt1HhOVmcM5JXGInOBAtDjFctBJ7URGQNmdTyWCUlA/viewform?usp=pp_url" target="_blank">Apply Now</a>
        
      </CareerData>
      
  </>
  )
}

export default Career;