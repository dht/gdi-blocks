import styled from 'styled-components';
import {  mobile, css, device, Grid } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-size: cover;
    background-position: center bottom;
    background-color: white;
    color: black;
    height: ${(props) => props.theme.vh('auto')};
    display: flex;
    padding-top: 70px;
    padding-bottom: 170px;
    font-family: ${(props) => props.theme.fontFamily};



    ${device(
        '720p',
            css`
                height: auto;
            `
    )}
    
    ${device(
        'tablet',
            css`
                height: auto;
            `
    )}

   

    ${device(
        'mobile',
            css`
                
             height: auto;
            `
        
        )}
`;


export const ContainerFluid = styled.div``;

export const Row = styled.div``;

export const Column = styled.div``;

export const Header = styled.h3 `
    font-size: 48px;
    font-weight: 500;
    font-family: 'Circular'
sans-serif;

${mobile(
    css`
        font-size: 32px;
    `
)}
`

export const ContactBack = styled.div`
background-color: #7A77D0;
padding: 100px 200px 100px 200px;

`



export const SubHeader = styled.p`
    font-size: 22px;
    font-family: 'Roboto'
sans-serif;
font-weight: 300;
color:
RGB(102, 102, 102)
`;