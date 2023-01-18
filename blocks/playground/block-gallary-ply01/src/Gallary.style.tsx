import styled from 'styled-components';
import { GallaryExtra } from './Gallary';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div<{ extra: GallaryExtra }>`
    flex: 1;
    background-image: url(${(props) => props.extra.imageUrl});
    background-size: cover;
    background-position: center bottom;
    height: ${(props) => props.theme.vh(70)};
    display: flex;
    font-family: ${(props) => props.theme.fontFamily};

    ${mobile(
        css`
            text-align: center;
          
        `
    )}
`;

export const Container = styled(Grid.Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const H1 = styled.h1`
    font-size: 42px;
    max-width: 500px;
    margin: 10px 0;
    padding: 0;
    color: white;
    text-align: center;
`;


