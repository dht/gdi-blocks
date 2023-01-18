import styled from 'styled-components';
import { HeroExtra } from './About';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div<{ extra: HeroExtra }>`
    flex: 1;
    background-color: white;
    height: ${(props) => props.theme.vh(60)};
    ${mobile(
        css`
            height: ${(props) => props.theme.vh(300)};
        `
    )};
    display: flex;
    justify-content: center;
    font-family: ${(props) => props.theme.fontFamily};
`;

export const Container = styled(Grid.Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 10px;
    height: 250px;
    background-color: white;
`;

export const Container1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
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
    border: 1px solid grey;
    margin: 0;
    ${mobile(
        css`
            width: 80%;
            margin-bottom: 20px;
            height: 45em;
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
    align-items: center;
    align-self: center;
    align-content: center;
    margin: 10px 10px;
    padding: 0;
    padding-bottom: 20px;
    color: black;
    text-align: center;
`;

export const Greeting = styled.div`
    color: black;
    background-color: #ffffff44;
    padding: 2px 30px;
    border-radius: 5px;
    font-size: 16px;
    line-height: 1.5em;
    font-weight: bold;
    font-variation-settings: 'wdth' 125, 'wght' 350;
    padding-bottom: 20px;
`;

export const Skill = styled.div`
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

export const Social = styled.div``;
