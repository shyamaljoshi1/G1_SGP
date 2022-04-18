import React from 'react'
import styled, {keyframes} from "styled-components"

export default function TextAnimation(){
    return <Wrapper>ABOUT RESOULTE CONSULTANTS</Wrapper>
}

const Animation = keyframes`
    0% {opacity:0;}
    100%{opacity:1}
`

const Wrapper= styled.span`
    opacity: 0;
    animation-name: $(Animation);
    animation-duration:6s;

`