import styled from 'styled-components';
import { Grid, mobile, css, device } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-color: #223;
    padding: 100px 0;
    padding-top: 0px;

    ${device(
        'tablet',
            css`
                padding-bottom: 70px;
            `
    )}
    ${mobile(
        css`
            padding: 40px 0;
        `
    )};
`;

export const H2 = styled.h3`
    font-size: 42px;
    padding: 0;
    margin: 0;
    margin-bottom:10px;
    color: white;


    ${device(
        'tablet',
            css`
                font-size: 35px;
            `
    )}

    ${mobile(css`
        text-align: center;
        font-size: 25px;
        padding-left: 13px;
        padding-right: 13px;

        
    `)}
`;


export const SubTitle = styled.p`
    font-size: 18px;
    color: #666666;
    font-family: 'Roboto', sans-serif;

    ${mobile(
        css`
            padding-left: 24px;
            padding-right: 24px;
            font-size: 16px;
        `
    )}
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

