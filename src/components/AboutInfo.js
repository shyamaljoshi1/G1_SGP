import React from 'react';
import styled from 'styled-components';
import { Button } from "./Button";

const Section = styled.section`
    padding:25rem 0;
    margin-top: -20rem;
    background-color: #eee;
    height: 100rem;
`; 

const SectionHeading = styled.div`
    text-align: center;
    margin-bottom: 8rem;
    h1{
        font-size: clamp(3.5rem, 8vh, 2rem);
        font-weight: 400;
        color:#555;
        text-transform: uppercase;
        text-shadow: 0px 0px 2rem rgba(0, 0, 0, 0.2);
        margin-bottom: 0.8rem;
        transition: all .2s;
        letter-spacing: .5rem;
        span{
            background-image: linear-gradient(to right , #2998ff , #5643fa);
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            display: inline-block;
        }
        &:hover{
            transform: translateY(-1rem);
            text-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
            cursor: pointer;
        }
    }

`;

const SectionRow = styled.section`
    max-width: 114rem;
    min-width: 76.9rem;
    margin: 12rem auto;
    &::after{
        content: "";
        display: table;
        clear:both;
    }
`; 


const Container1 = styled.div`
    float: left;
    
    /* &:not(:last-child){
        margin-right: 60px;
    } */
    
    width: calc((100% - 60px)/2);
    h1{
        margin-bottom: 1rem;
        font-size: 2.6rem;
        letter-spacing: .5rem;
        font-weight: 600;
        color: #444;
    }
    p{
        margin-bottom: 5rem;
        letter-spacing: .2rem;
        color: #777;
        font-size: 1.3rem;
        &:nth-child(2){
            margin-bottom: 3rem;
        }
    }    
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
`;
const Container2 = styled.div`
    float: left;
    margin-top: 3rem;
    width: calc((100% - 60px)/2);
`;

const Composition=styled.div`
    position: relative;
    img{
        width:52%;
        box-shadow: 0 1.5rem 4rem rgba($color-black,0.4);
        border-radius: 2px;
        position: absolute;
        z-index: 10;
        transition: all .2s;
        &:nth-child(1){
            top: 2.83rem;
            left: 6rem ;
            &:hover{
                transform: scale(1.2);
                z-index: 20;
            }
        }
        &:nth-child(2){
            top: 2.83rem;
            left:35rem;
            &:hover{
                transform: scale(1.2);
                z-index: 20;
            }
        }
        &:nth-child(3){
            top: 19.7rem;
            left: 20.3rem;
            &:hover{
                transform: scale(1.2);
                z-index: 20;
            }
        }
    }
`;


const AboutInfo = ({heading,heading2,paragraphOne,paragraphTwo,buttonLabel,image1,image2,image3}) => {
    return(
        <Section>
            <SectionHeading>
                <h1>
                    About <span>resolute consultant</span>
                </h1>
            </SectionHeading>
            <SectionRow>
                <Container1 >
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <h1>{heading2}</h1>
                    <p className='p1'>{paragraphTwo}</p>
                    <Button to="/homes" primary={true}>{buttonLabel}</Button> 
                </Container1>
                <Container2 >
                    <Composition>
                        <img src={image1} alt="home" />
                        <img src={image2} alt="home" />
                        <img src={image3} alt="home" />
                    </Composition>
                </Container2>
            </SectionRow>
        </Section>
    );
};

export default AboutInfo;