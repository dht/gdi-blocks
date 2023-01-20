import styled from 'styled-components';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-color: #fff;
    color: #888;
    padding: 42px 0 95px;
    font-size: 14px;
    font-family: 'Ubuntu', sans-serif;
`;

export const Container = styled(Grid.Container)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 15px;
    padding: 2vh 0;
    color: #888;
`;

export const Text = styled.div`
    font-size: 14px;
`;

export const Image = styled.img``
