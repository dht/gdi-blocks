import styled from 'styled-components';
import { Grid, mobile, css, device } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-size: cover;
    background-position: center bottom;
    background-color: white;
    color: black;
    
    display: flex;
    border-top: 1px solid #e5e5e5;
    padding-top: 100px;
    padding-bottom: 125px;
    font-family: 'Circular',sans-serif;

    ${device(
        'tablet',
            css`
                padding: 70px 0;
            `
    )}

    ${mobile(
        css`
            padding: 70px 0;
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

export const H1 = styled.h3`
    font-size: 42px;
    padding: 0;
    color: black;
    text-align: center;
    font-weight:normal;
    font-family: 'Circular',sans-serif;

    ${device(
        'tablet',
            css`
                font-size: 35px;
            `
    )}
    ${mobile(
        css`
            font-size: 25px;
        `
    )}
`;



export const SubTitle = styled.p`
    font-size: 18px;
    color: #666666;
    margin-bottom: 50px;
    
    ${device(
        'tablet',
            css`
                font-size:18px;
            `
    )}
    ${mobile(
        css`
            font-size: 17px;
        `
    )}
`;

export const ImageContainer = styled.img`
    width: 100%;
    height: 400px;

    ${device(
        'tablet',
            css`
                width: 90%;
                margin-left: 25px;
            `
    )}

    ${mobile(
        css`
            height: 320px;
            width: 90%;
            margin-left: 20px;
        `
    )}
`;

export const Row = styled.div``;
export const Column = styled.div``;