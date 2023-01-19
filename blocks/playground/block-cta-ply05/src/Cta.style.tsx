import styled from 'styled-components';
import { Grid, mobile, css } from '@gdi/engine';
import { CtaExtra } from './Cta';

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

    ${mobile(
        css`
            height: 170vh;
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



export const VideoImage = styled.div<{extra:CtaExtra}>`
background-image: url(${(props)=> props.extra.imageUrl});
height: 520px;
width: 700px;
padding: 10%;
background-size:contain;
background-repeat: no-repeat;

`
export const ProductInfo = styled.div`
height: 520px;
width: 700px;
padding: 10%;
display: block !important;
flex-direction: column !important ;


`



export const Row = styled.div``;
export const Column = styled.div``;

export const H5 = styled.h5`
    
`
export const ProductDescription = styled.p`
font-size: 19px;
font-weight: lighter;
    
`
export const Icon = styled.span`
    padding: 18px;
    font-weight: bold;
    font-size: 30px;
    color: #007ACE;
    border-radius: 50%;
    background-color: aliceblue;
`;




export const iconClass = "material-symbols-outlined"