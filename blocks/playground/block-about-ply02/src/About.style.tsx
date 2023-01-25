import styled from 'styled-components';
import { AboutExtra } from './About';
import { mobile, css } from '@gdi/engine';

export const Wrapper = styled.div<{ extra: AboutExtra }>`
    flex: 1;
    background-color: white;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    font-family: ${(props) => props.theme.fontFamily};
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    padding: 0 20px;
    flex: 1;
    justify-content: center;
    ${mobile(
        css`
            flex-direction: column;
        `
    )};
`;

export const Box = styled.div`
    width: 30%;
    height: 50%;
    text-align: center;
    padding: 20px;
    border: 1px solid #8080807d;
    margin: 0;

    ${mobile(
        css`
            width: 95%;
            margin-bottom: 20px;
            height: 26em;
            padding: 1px;
            border: 0 solid #8080807d;
        `
    )};
`;

export const H2 = styled.h2`
    text-transform: uppercase;
    font-size: 30px;
    max-width: 500px;
    font-weight: 500;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    align-self: center;
    align-content: center;
    margin: 10px;
    padding: 0 0 20px 0;
    color: black;
`;

export const Body = styled.div`
    color: black;
    background-color: #ffffff44;
    padding: 2px 30px;
    border-radius: 5px;
    font-size: 16px;
    line-height: 1.5em;
    font-weight: bold;
    font-variation-settings: 'wdth' 125, 'wght' 350;
`;

export const Button = styled.div`
    display: inline-block;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    margin-top: 2px;
    font-variation-settings: 'wdth' 125, 'wght' 350;
    background-color: #163c60;
    color: white;
    padding: 10px;
    border: 1px solid #163c60;
    ${mobile(
        css`
            text-align: center;
        `
    )};

    &:hover {
        background-color: white;
        color: #163c60;
    }
`;