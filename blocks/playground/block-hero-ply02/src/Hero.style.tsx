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
            height: 110vh;
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
    font-size: 60px;
    margin: 10px 0;
    padding: 0;
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
    font-size: 22px;
    color:#666666;

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
    background-size:100% 100%;
    
    ${mobile(
        css`
            height: 300px;
            background-size: 100% 100%;
            width: 300px;
        `
    )}
`

