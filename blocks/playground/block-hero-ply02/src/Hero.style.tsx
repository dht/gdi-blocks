import styled from 'styled-components';
import { HeroExtra } from './Hero';
import { Grid, mobile, css, device } from '@gdi/engine';

export const Wrapper = styled.div`
    background-color: white;
    background-size: cover;
    height: 84vh;
    color: #000;

    ${device(
        'tablet'
            ,css`
                height: 120vh;
            
            `)}

    ${mobile(
        css`
            height: 110vh;
        `
    )}
`;





export const HeroButton = styled.button`
    margin-top: 30px;
    padding: 15px 20px;
    border-radius: 30px;
    font-size: 15px;
    color: white;
    border: none;
    font-weight: bold;
    cursor: pointer;
    background-color: #5c6ac4;
`;

export const H1 = styled.h3`
    font-size: 60px;
    padding: 0;
    vertical-align: baseline;
    color: black;
    line-height: 60px;
    font-family: 'Circular', sans-serif;
    word-spacing: 5px;
    
    ${device(
        '720p',
            css`
                font-size: 45px;
            `
    )}
    ${device(
        'tablet',
            css`
                font-size: 45px;
            `
    )}
    ${mobile(
        css`
            font-size: 35px;
            line-height: 35px;
        `
    )}
`;

export const P = styled.p`
    font-weight: normal;
    font-size: 22px;
    color: #666666;

    ${mobile(
        css`
            font-size: 17px;
            padding-left: 12px;
            padding-right: 12px;
        `
    )}
`;


export const HeroImg = styled.div<{ extra: HeroExtra }>`
    background-image: url(${(props) => props.extra.imageUrl});
    height: 490px;
    width: 90%;
    background-repeat: no-repeat;
    margin-top: 50px;
    background-size: 100% 100%;

    ${device(
        '720p',
        css`
            height: 400px;
        `
    )}

    ${device(
        'tablet',
        css`
            height: 360px;
        `
    )}


    ${mobile(
        css`
            height: 300px;
            background-size: 100% 100%;
            width: 100%;
        `
    )}
`;

export const Client = styled.img`
    ${device(
        'tablet',
        css`
            width: 100%;
        `
    )}

    ${device(
        '720p',
        css`
            width: 100%;
            height: 30px;
        `
    )}   

    ${mobile(
        css`
            height: 24px;
            width: 100%;
        `
    )}
`;


export const ClientIcon = styled.div``;


export const Container = styled.div``;
export const Row = styled.div`
    .p-40px {
        padding: 40px;
    }

    ${device(
        'tablet',
            css`
                .p-40px {
                    padding: 0px;
                }
            `
    )}

    ${mobile(
        css`
            .p-40px {
                padding: 10px;
            }
        `
    )}
`;
export const Column = styled.div``;


