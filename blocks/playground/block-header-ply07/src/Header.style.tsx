import styled from 'styled-components';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-size: cover;
    background-color: #0d3d60;
    height: 70px;
    display: flex;

    ${mobile(css`
        max-width: 99vw;
    `)}
`;
export const MobileContainer = styled.div`
    max-width: initial;
    display: inline-flex;

    width: 100%;

    ${mobile(css``)}
`;

export const Container = styled.div`
    max-width: initial;
    display: inline-flex;
    width: 100%;

    ${mobile(css``)}
`;

export const Row = styled(Grid.Row)`
    align-items: center;

    ${mobile(css`
        flex-direction: row;
    `)}
`;

export const Column = styled(Grid.Column)``;

export const Flex = styled.div`
    flex: 1;

    ${mobile(css`
        display: none;
    `)}
`;

export const Title = styled.h1`
    padding: 0px 10px;
    margin: 0;
    font-variation-settings: 'wdth' 100, 'wght' 450;
    text-transform: uppercase;
    font-size: 22px;
    white-space: nowrap;

    ${mobile(css`
        text-indent: 20px;
    `)}
`;
