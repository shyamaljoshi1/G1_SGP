import React from 'react';
import styled from 'styled-components';
import { Button } from "./Button";

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem 0rem;
    @media screen and (max-width: 768px) {
        padding-top:1rem ;
        padding-bottom:1rem ;
    }
`; 

const Container = styled.div`
    padding: 3rem calc((100vw - 1300px)/2);
    display: flex;
    grid-template-columns: 1fr lfr;
    grid-template-rows: 800px;
    background-color: ${({reverse}) => (reverse? '#000' : '#fff')};
    color: ${({reverse}) => (reverse? '#fff' : '#000')};
    /* background-color: #000;
    color: #fff; */

    @media screen and (max-width: 768px) {
        display: grid;
        grid-template-columns:lfr;
        padding-top:1rem ;
        grid-template-rows: 550px;
    }
`;
const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left; 
    align-items: flex-start;
    flex-wrap: wrap;
    box-sizing: border-box;
    line-height: 1.4;
    padding: 1rem 2rem;
    width: 100%;
    order: ${({reverse}) => (reverse? '2' : '1')};

    h1{
        margin-bottom: 2rem;
        font-size: clamp(1.5rem,6vw,2rwm);
    }
    p{
        margin-bottom: 2rem;
    }
    @media screen and (max-width: 768px) {
        padding-top:1rem ;
        height: 570px; 
    }
`;

const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse? '1' : '2')};
    display: flex;
    justify-content: ${({reverse}) => (reverse? 'left' : 'right')};
    
    align-items: right;
    //width: 1000px;

    @media screen and (max-width: 768px){
        order: ${({reverse}) => (reverse? '2' : '1')};
        //width: 800px;
    }

    img{
        width: 65%;
        height: 100%;
        display: flex;
        object-fit: cover;
        @media screen and (max-width: 768px){
            width: 100%;
            height: 100%;
        }
    }
`;


const InfoSection = ({heading,paragraphOne,paragraphTwo,buttonLabel,reverse,image}) => {
    return(
        <Section>
            <Container reverse={reverse}>
                <ColumnLeft reverse={reverse}>
                <h1>{heading}</h1>
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
                <Button to="/homes" primary="true">{buttonLabel}</Button>
                </ColumnLeft>

                <ColumnRight reverse={reverse}>
                    <img src={image} alt="home" />
                </ColumnRight>
            </Container>
        </Section>
    );
};

export default InfoSection;