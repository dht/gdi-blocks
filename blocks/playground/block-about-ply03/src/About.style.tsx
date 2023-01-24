import styled from 'styled-components';
import { Grid, mobile, css, device } from '@gdi/engine';

export const Wrapper = styled.div`
    background-color: white;
    color: #000;
    font-family: 'Circular', sans-serif;
    border-top: 1px solid #e5e5e5;
    padding: 130px 0;

    ${device(
        'tablet',
        css`
            padding: 70px 0;
        `
    )}

    ${mobile(
        css`
            padding: 80px 0;
        `
    )};
`;

export const H1 = styled.h1`
    font-size: 48px;
    margin-bottom: 22px;
    padding: 10;
    line-height: 55px;
    vertical-align: baseline;
    color: black;
    font-family: 'Circular', sans-serif;
    word-spacing: 5px;
    font-weight: 400;

    ${device(
        '720p',
        css`
            font-size: 45px;
        `
    )}

    ${device(
        'tablet',
        css`
            font-size: 35px;
            padding-left: 30px;
            padding-right: 30px;
        `
    )}
    ${mobile(
        css`
            font-size: 40px;
            line-height: 46px;
            width: 300px;
            padding-left: 5px;
            padding-right: 20px;
        `
    )}
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 10%;
    padding-right: 10%;
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
        `
    )}
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
        padding: 20px 44px;
        border-radius: 30px;
        font-size: 15px;
        color: white;
        border: none;
        font-weight: bold;
        cursor: pointer;
        background-color: #5c6ac4;
    }
    .mt-10 {
        margin-top: 10%;
    }
    
    .margin-top {
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
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    padding-bottom: 30px;
    color: #666666;
    font-family: 'Roboto', sans-serif;

    ${device(
        'HD',
        css`
            font-size: 17px;
        `
    )}

    ${device(
        '720p',
        css`
            font-size: 18px;
        `
    )}

    ${device(
        'tablet',
        css`
            font-size: 17px;
            padding-left: 20px;
            padding-right: 20px;
        `
    )}

    ${mobile(
        css`
            font-size: 15.5px;
            padding-left: 10px;
            padding-right: 20px;
        `
    )}
`;

export const AboutCard = styled.div`
    height: auto;
    width: 32%;
    float: left;
    padding:40px 30px;
    border-radius: 8px;
    margin-left: 64px;
    border: 1px solid silver;
    margin-top: 35px;

    &.card1 {
        margin-top: 70px !important;
    }

    &.card1:hover {
        background-image: linear-gradient(
            120deg,
            rgba(87, 82, 208, 0.5) 0%,
            #605bd2
        );
        box-shadow: 0 10px 19px 1px rgb(87 82 208 / 20%);
    }

    &.card2:hover {
        background-image: linear-gradient(
            120deg,
            rgba(222, 54, 24, 0.6) 0%,
            #de3618
        );
        box-shadow: 0 10px 19px 1px rgb(222 54 24 / 20%);
    }

    &.mtt-0 {
        margin-top: -272px !important;
        
    }

    &.mtt-0:hover {
        background-image: linear-gradient(
            120deg,
            rgba(156, 106, 222, 0.6) 0%,
            #9c6ade
        );
        box-shadow: 0 10px 19px 1px rgb(156 106 222 / 20%);
    }

    .ic {
        padding: 10px;
        background-color: antiquewhite;
        border-radius: 50%;
        font-weight: bold;
        font-size: 30px;
    }

    &:hover .ic {
        color: black;
    }

    &:hover {
        

        background-image: linear-gradient(
            120deg,
            rgba(71, 193, 191, 0.6) 0%,
            #47c1bf
        );
        box-shadow: 0 10px 19px 1px rgb(71 193 191 / 20%);

        transition-duration: 0.5s !important;
        cursor: pointer;
        transform: scale(1.03);
    }

    &:hover .h2 {
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
            margin-left: 30px;

            &.mtt-0 {
                margin-top: 35px !important;
            }
            &.card1 {
            margin-top: 35px !important;
            }
            width: 42%;
            padding: 38px;
        `
    )}

    ${mobile(
        css`
            float: none;
            width: 79%;
            margin-left: 30px;
            transition-duration: 0.4s !important;
            &.mtt-0 {
             margin-top: 30px !important;
        
    }`
    )}
`;

export const H2 = styled.h4`
    font-weight: 400;
    font-size: 18px;
    ${device(
        '720p',
        css`
            font-size: 21px;
        `
    )}
`;

export const Span = styled.span`
    font-size: 16px;
    color: #666666;
    font-weight: normal;
    word-spacing: 2px;
    letter-spacing: 1px;
    font-family: 'Roboto' sans-serif;

    ${device(
        'HD',
        css`
            word-spacing: 3px;
            letter-spacing: normal;
            font-size: 16px;
        `
    )}
    ${device(
        '720p',
        css`
            font-size: 15px;
        `
    )}
`;

export const Button = styled.button`
    margin-top: 30px;
    padding: 15px 20px;
    border-radius: 30px;
    font-size: 17px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    width: 200px;
    color: #5c6ac4;
    background-color: #eef0f9;

    &:hover {
        background-color: #5c6ac4;
        transition-duration: 0.4s;
        color: white;
    }

    ${mobile(
        css`
            margin-left: 7px;
            font-size: 16px;
        `
    )}
`;

export const CardIcone = styled.span`
    color: #5c6ac4 !important;
    font-weight: bold;
    font-size: 30px;
    padding: 10px;
    border-radius: 50%;
    background-color: #eef0f9;

    &.icon2 {
        color: red !important;
        font-weight: bold;
        font-size: 30px;
        padding: 10px;
        border-radius: 50%;
        background-color: #fceae7;
    }

    &.icon3 {
        color: #9c6ade !important;
        font-weight: bold;
        font-size: 30px;
        padding: 10px;
        border-radius: 50%;
        background-color: #f5f0fc;
    }

    &.icon4 {
        color: #47c1bf !important;
        font-weight: bold;
        font-size: 30px;
        padding: 10px;
        border-radius: 50%;
        background-color: #ecf9f9;
    }
`;
