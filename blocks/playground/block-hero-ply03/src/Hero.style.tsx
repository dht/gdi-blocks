import styled from 'styled-components';
import { HeroExtra } from './Hero';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    
    background-color: white;
    background-size: cover;
    height: 100vh;
    color: #000;
    font-family: ${(props) => props.theme.fontFamily};
    ${mobile(
        css`
            height: 300vh;
        `
    )}
`;

export const Container = styled(Grid.Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: white;
`;

export const H1 = styled.h1`
    font-size: 48px;
    margin: 10px 0px;
    padding: 10;
    line-height:55px;
    vertical-align:baseline;
    color: black;
    font-family: 'Circular',sans-serif;
    word-spacing: 5px;
    font-weight: 400;

    ${mobile(
        css`
            font-size: 35px;
            line-height: 35px;
            margin-left: 10px;
        `
    )}
`;

export const Greeting = styled.div`
    color: #33334499;
    background-color: #ffffff44;
    padding: 2px 30px;
    border-radius: 5px;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    font-variation-settings: 'wdth' 125, 'wght' 350;
`;

export const Skill = styled.div`
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
    font-size: 17px;
    margin-top: 2px;
    margin-bottom: 30px;
    font-variation-settings: 'wdth' 125, 'wght' 350;
    ${mobile(
        css`
            text-align: center;
        `
    )}
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row; 
  padding-left: 19%;
  padding-right: 19%;
  
  ${mobile(
    css`
        display: flex;
        flex-direction: column; 
        padding-left: 0%;
        padding-right: 0%;
    `
  )}
`;

export const Col = styled.div`
    width: 100%;
    .pt-10 {
        padding-top: 10%;
    }
    .hero-button {
        margin-top: 30px;
        padding: 15px 20px;
        border-radius: 30px;
        font-size: 15px;
        color: white;
        border: none;
        font-weight: bold;
        cursor: pointer;
        background-color: #5C6AC4;
    }
    .mt-10 {
        margin-top: 10%;
    }
    .mt-5 {
        margin-top: 5%;
    }
    .ml-5 {
        margin-left: 5%;
    }
    .mt-50px {
        margin-top: 50px;
    }
    ${mobile(
       css`
        .pt-10 {
            padding-top: 4%;
            padding: 20px;
        }
        .hero-button {
            margin-left: 10px;
        }
       `
    )}
`;

export const P = styled.div`
    font-weight: normal;
    font-size: 19px;
    letter-spacing: 1px;
    color:#666666;
    word-spacing: 5px;

    ${mobile(
        css`
            font-size: 17px;
            padding-left: 12px;
            padding-right: 12px;
        `
    )}
`;


export const ClientIcon = styled.div`
    float: left;
    margin-top: 40px;
    img {
        margin-left: 20px;
    }
    ${mobile(
        css`
            height:20px;
            width: 130px;
            img {
                margin-left: 10px;
            }
        `
    )}
`

export const HeroImg = styled.div<{extra:HeroExtra}>`
    background-image: url(${(props) => props.extra.imageUrl});
    height:100%;
    width: 100%;
    background-repeat: no-repeat;
    margin-top: 50px;
    background-size:cover;
    
    ${mobile(
        css`
            height: 300px;
            background-size: 100% 100%;
            width: 300px;
        `
    )}
`;

export const HeroCard = styled.div`
    border: 1px solid silver;
    height: 270px;
    width: 40%;
    float: left;
    padding: 20px;
    border-radius: 8px;

    &:hover {
        background: rgb(21,112,195);
background: linear-gradient(16deg, rgba(21,112,195,0.5970662434895833) 5%, rgba(108,92,210,0.7567301090358018) 30%, rgba(180,104,203,0.8211558793439251) 100%, rgba(30,48,34,1) 100%);
        transition-duration: 0.4s !important;
        cursor: pointer;
        transform: scale(1.05);

    }
    &:hover H2 {
        color: white;
        transition-duration: 0.8s;
    }
    &:hover Span {
        color: white;
        transition-duration: 0.8s !important;
    }
    ${mobile(
        css`
            float: none;
            width: 90%;
            transition-duration: 0.4s !important;

        `
    )}

` 

export const H2 = styled.h2`
    font-weight: bold;
`

export const Span = styled.span`
    font-size: 17px;
    color: #666666;
    font-weight: normal;
    word-spacing: 4px;
    letter-spacing: 1px;
`

export const Button = styled.button`
     margin-top: 30px;
        padding: 15px 20px;
        border-radius: 30px;
        font-size: 17px;
        border: none;
        font-weight: bold;
        cursor: pointer;
        width: 200px;
        color: #5C6AC4;
        background-color: #EEF0F9;
        
        &:hover {
            background-color: #5C6AC4;
            transition-duration: 0.4s;
            color: white;
        }

        ${mobile(
            css`
                margin-left: 10px;
            `
        )}
`