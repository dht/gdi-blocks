import styled from 'styled-components';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-color: #223;
    padding-bottom: 75px;
`;

export const H2 = styled.h2`
    font-size: 50px;
    padding: 0;
    margin: 0;
    margin-bottom: 50px;
    color: white;

    ${mobile(css`
        text-align: center;
    `)}
`;


export const SubTitle = styled.p`
    font-size: 22px;
    color: #666666;
    font-family: 'Roboto', sans-serif;
`;

export const Container = styled(Grid.Container)`
    padding: 50px 0;
`;

export const Overlay = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    border-radius: 4px;
    transition-duration: 0.4s;
    overflow: hidden;
    cursor: pointer;
    
    .galleryImage{
        height: 100%;
        width: 100%;
        transition-duration: 0.4s;
    }

    &:hover .galleryImage {
        transform: scale(1.09);
    }
`;


export const ProductImage = styled.img``

