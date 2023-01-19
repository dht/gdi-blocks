import styled from 'styled-components';
import { HeroExtra } from './Hero';
import { Grid, mobile, css, device } from '@gdi/engine';

export const Wrapper = styled.div`
    background-color: white;
    background-size: cover;
    height: 84vh;
    color: #000;

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

export const Row = styled(Grid.Row)`
    width: 100%;
`;

export const Column = styled(Grid.Column)`
    width: 100%;

    .pt-10 {
        padding-top: 10%;
    }
    H1 {
        font-weight: normal;
    }
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

export const H1 = styled.h1`
    font-size: 60px;
    margin: 10px 0;
    padding: 0;
    line-height: 55px;
    vertical-align: baseline;
    color: black;
    font-family: 'Circular', sans-serif;
    word-spacing: 5px;
    font-weight: bold;

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

