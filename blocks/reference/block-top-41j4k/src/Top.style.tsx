import styled from 'styled-components';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-size: cover;
    background-color: #0d3d60;
    height: 70px;
    display: flex;

    ${mobile(css`
        max-width: 98vw;
    `)}
`;
export const Container = styled(Grid.Container)``;

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

export const Header = styled.h1`
    padding: 0;
    margin: 0;
    font-variation-settings: 'wdth' 100, 'wght' 450;
    text-transform: uppercase;
    font-size: 22px;
    white-space: nowrap;

    ${mobile(css`
        text-indent: 20px;
    `)}
`;
