import styled from 'styled-components';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    font-family: 'Ubuntu', sans-serif;
    background-color: white;
    position: relative;

`;

export const MobileContainer = styled(Grid.Container)`
    max-width: initial;
    width: 100%;
`;

export const Container = styled.div`
    max-width: initial;
    width: 100%;
`;

export const Row = styled(Grid.Row)`
    align-items: center;
    ${mobile(css`
        flex-direction: row-reverse;
    `)}
`;

export const Column = styled(Grid.Column)`
    display: flex;
    justify-content: center;
    align-items: center;

    ${mobile(css`
        &:nth-child(1) {
            padding-top: 25px;
            margin-right: 120px;
        }
    `)}
`;

export const Title = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    color: #222;
    font-size: 37px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    
    ${mobile(css`
        padding: 5px 0px 4px;
    `)}
`;
