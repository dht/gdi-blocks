import styled from 'styled-components';
import { QuotesExtra } from './Quotes';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-size: cover;
    background-position: center bottom;
    background-color: white;
    color: black;
    height: ${(props) => props.theme.vh(88)};
    display: flex;
    border-top: 1px solid silver;
    font-family: ${(props) => props.theme.fontFamily};
`;

export const Container = styled(Grid.Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const H1 = styled.h1`
    font-size: 50px;
    padding: 0;
    color: black;
    text-align: center;
    font-weight:normal;

    ${mobile(
        css`
            font-size: 30px;
        `
    )}
`;



export const SubTitle = styled.p`
    font-size: 22px;
    color: #666666;
`;

export const ImageContainer = styled.img`
    width: 100%;
    height: 400px;
`;


export const Row = styled.div``;
export const Column = styled.div``;
