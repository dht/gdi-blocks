import styled from 'styled-components';
import { HeroExtra } from './Hero';
import { mobile, css } from '@gdi/engine';

export const Wrapper = styled.div<{ extra: HeroExtra }>`
    flex: 1;
    background-image: url(${(props) => props.extra.imageUrl});
    background-size: cover;
    background-position: center bottom;
    transform: scale(1);
    transition: transform 1s ease-in-out;
    height: ${(props) => props.theme.vh(88)};
    ${mobile(
        css`
            background-image: url(${(props) => props.extra.imageUrlMobile});
            background-size: cover;
            background-position: center bottom;
            height: ${(props) => props.theme.vh(100)};
        `
    )};
    display: flex;
    justify-content: center;
    font-family: ${(props) => props.theme.fontFamily};
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    flex: 1;
    max-width: 800px;
    height: 250px;
    background-color: white;
    ${mobile(
        css`
            max-width: 330px;
            height: 250px;
        `
    )};
`;

export const H1 = styled.h1`
    font-size: 50px;
    max-width: 500px;
    font-weight: 500;
    margin: 10px 0;
    padding: 0;
    padding-bottom: 20px;
    color: #163c60;
    text-align: center;
    ${mobile(
        css`
            font-size: 30px;
        `
    )};
`;

export const Greeting = styled.div`
    color: black;
    background-color: #ffffff44;
    padding: 2px 30px;
    border-radius: 5px;
    font-size: 24px;
    font-weight: bold;
    font-variation-settings: 'wdth' 125, 'wght' 350;
    ${mobile(
        css`
            font-size: 16px;
        `
    )};
`;

export const Button = styled.div`
    color: #163c60;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    margin-top: 2px;
    margin-bottom: 30px;
    font-variation-settings: 'wdth' 125, 'wght' 350;
    background-color: white;
    padding: 20px;
    border: 1px solid #163c60;
    ${mobile(
        css`
            text-align: center;
        `
    )};

    &:hover {
        background-color: #163c60;
        color: white;
    }
`;

export const Social = styled.div``;
