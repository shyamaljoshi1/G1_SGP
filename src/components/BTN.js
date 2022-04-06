import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    background: #7B5E4E;
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
    padding: 10px 10px;
    margin:10px ;
    color: #fff;
    font-size: 14px;
    border-radius:8px ;
    &:hover{
        transform:scale3D(1.1,1.1,1.1);
    }
    &:active{
        background-color: #000;
    }
    @media screen and (max-width: 768px){
        min-width:200px ;
        max-width:200px ;
    }

`;