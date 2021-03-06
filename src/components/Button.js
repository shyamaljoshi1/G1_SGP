import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    background: ${({primary})=> (primary ? '#000d1a' : '#fff')};
    white-space:nowrap;
    outline:none;
    border:none;
    min-width:100px;
    max-width:160px;
    cursor: pointer;
    text-decoration:none;
    transition:0.2s;
    display: flex;
    justify-content:center;
    align-items:center;
    padding: ${({Big})=> (Big ? '16px 40px' : '14px 24px')};
    color: ${({primary})=> (primary ? '#fff' : '#000d1a')};
    font-size: ${({Big})=> (Big ? '20px' : '14px')};

    &:hover{
        transform:translateY(-2px);
    }

`;