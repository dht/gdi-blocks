import styled from 'styled-components';
import { HeroExtra } from './Hero';
import { Grid, mobile, css, device } from '@gdi/engine';

export const Wrapper = styled.div<{ extra: HeroExtra }>`
    flex: 1;
    &::before {
        content: '';
        background-image: url(${(props) => props.extra.imageUrl});
        background-size: cover;
        background-position: center bottom;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.1;
    }
    background-color: rgba(216, 232, 242);
    ${mobile(
        css`
            height: ${(props) => props.theme.vh(130)};
        `
    )};

    justify-content: center;
    font-family: ${(props) => props.theme.fontFamily};
    display: flex;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    flex: 1;
    max-width: 800px;
    width: 0px;
    height: 70%;
    position: relative;
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
    position: relative;
`;

export const Greeting = styled.div`
    color: black;
    background-color: #ffffff44;
    padding: 2px 30px;
    border-radius: 5px;
    font-size: 18px;
    text-align: center;
    text-align-last: center;
    font-weight: bold;
    line-height: 1.5;
    padding-bottom: 20px;
    font-variation-settings: 'wdth' 125, 'wght' 350;
`;

export const Skill = styled.div`
    color: black;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    margin-top: 2px;
    margin-bottom: 30px;
    font-variation-settings: 'wdth' 125, 'wght' 350;
    background-color: white;
    padding: 20px;
    margin-top: 1em;
    margin-bottom: 5em;
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
