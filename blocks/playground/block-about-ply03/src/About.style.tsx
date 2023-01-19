import styled from 'styled-components';
import { Grid, mobile, css ,device } from '@gdi/engine';

export const Wrapper = styled.div`
    
    background-color: white;
    background-size: 100% 100%;
    height: 100vh;
    color: #000;
    font-family: ${(props) => props.theme.fontFamily};

    ${device(
        'tablet',
        css`
            height: 140vh;
        
        `)}

    ${mobile(
        css`
            height: 130rem;
        `
    )};



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

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row; 
  padding-left: 10%;
  padding-right: 10%;
  border-top: 1px solid silver;
  ${device(
    'HD+',
        css`
            padding-left: 20px;
            padding-right: 20px;
        `
  )}       

  ${device(
    'HD',
        css`
            padding-left: 10px;
            padding-right: 10px;
        `
  )}  

  ${device(
    '720p',
        css`
            
            padding-left: 10px;
            padding-right: 10px;
        `
    )}
        
  ${device(
        'tablet',
        css`
            flex-direction: column;
            padding-left: 16px !important;
            padding-right: 10px;
        
        `)}
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



export const AboutCard = styled.div`
    height: 300px;
    width: 32%;
    float: left;
    padding: 20px;
    border-radius: 8px;

    .ic {
        padding: 10px;
        background-color: antiquewhite;
        border-radius: 50%;
        font-weight: bold;
        font-size: 30px;
        
    }

    &:hover .ic {
        color:black;
    }

    &:hover {
        background: rgb(21,112,195);
        background: linear-gradient(16deg, rgba(21,112,195,0.5970662434895833) 5%, rgba(108,92,210,0.7567301090358018) 30%, rgba(180,104,203,0.8211558793439251) 100%, rgba(30,48,34,1) 100%);
        transition-duration: 0.4s !important;
        cursor: pointer;
        transform: scale(1.05);

    }
    &:hover H2 {
        color: white !important;
        transition-duration: 0.8s;
    }
    &:hover Span {
        color: white;
        transition-duration: 0.8s !important;
    }

    ${device(
        'tablet',
            css`
                width: 290px;
            `
        )}

    ${mobile(
        css`
            float: none;
            width: 90%;
            transition-duration: 0.4s !important;

        `
    )}

    

` 

export const H2 = styled.h4`
    font-weight: bold;
    ${device(
        '720p',
            css`
                font-size: 21px;
            `
    )}
`

export const Span = styled.span`
    font-size: 17px;
    color: #666666;
    font-weight: normal;
    word-spacing: 4px;
    letter-spacing: 1px;
    ${device(
        '720p',
            css`
                font-size: 15px;
            `
    )}
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

export const CardIcone = styled.span``