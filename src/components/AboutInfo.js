import React from 'react';
import styled from 'styled-components';
import { Button } from "./Button";

const Section = styled.section`
    padding:25rem 0;
    margin-top: -20vh;
    background-color: #eee;
    height: 120vh;
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
    max-width: 1140px;
    margin: 0 auto;
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
`;
const Container2 = styled.div`
    float: left;
    margin-top: 3rem;
    width: calc((100% - 60px)/2);
`;

const Composition=styled.div`
    position: relative;
    img{
        width:55%;
        box-shadow: 0 1.5rem 4rem rgba($color-black,0.4);
        border-radius: 2px;
        position: absolute;
        z-index: 10;
        transition: all .2s;
        &:nth-child(1){
            top: -2rem;
            left: 7rem ;
            &:hover{
                transform: scale(1.2);
                z-index: 20;
            }
        }
        &:nth-child(2){
            top: -2rem;
            right: -13rem;
            &:hover{
                transform: scale(1.2);
                z-index: 20;
            }
        }
        &:nth-child(3){
            top: 15rem;
            left: 40% ;
            &:hover{
                transform: scale(1.2);
                z-index: 20;
            }
        }
    }
`;


// const ColumnLeft = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: left; 
//     align-items: flex-start;
//     flex-wrap: wrap;
//     box-sizing: border-box;
//     line-height: 1.4;
//     padding: 1rem 2rem;
//     width: 100%;
//     order: ${({reverse}) => (reverse? '2' : '1')};

//     h1{
//         margin-bottom: 2rem;
//         font-size: clamp(1.5rem,6vw,2rwm);
//     }
//     p{
//         margin-bottom: 2rem;
//     }
//     @media screen and (max-width: 768px) {
//         padding-top:1rem ;
//         height: 570px; 
//     }
// `;

// const ColumnRight = styled.div`
//     padding: 1rem 2rem;
//     order: ${({reverse}) => (reverse? '1' : '2')};
//     display: flex;
//     justify-content: ${({reverse}) => (reverse? 'left' : 'right')};
    
//     align-items: right;
//     //width: 1000px;

//     @media screen and (max-width: 768px){
//         order: ${({reverse}) => (reverse? '2' : '1')};
//         //width: 800px;
//     }

//     img{
//         width: 65%;
//         height: 100%;
//         display: flex;
//         object-fit: cover;
//         @media screen and (max-width: 768px){
//             width: 100%;
//             height: 100%;
//         }
//     }
// `;


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