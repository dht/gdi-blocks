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
    border-top: 1px solid silver;
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


export const Container = styled.div`

`;

export const Row = styled.div`

`;

export const Column = styled.div`

`

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

export const SubHeader = styled.p`
    font-size: 22px;
    font-family: 'Roboto'
sans-serif;
font-weight: 300;
color:
RGB(102, 102, 102)

`

export const Card = styled.div`
overflow: hidden;
transition-duration: 0.3s;

&:hover {
    transform: translateY(-10px);
    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);

}
`;
export const CardHeader = styled.div`
overflow: hidden;
`;
export const CardBody = styled.div`
min-height: 200px;
padding: 30px;

`;
export const CardImage = styled.img`
        height: 100%;
        width: 100%;
        border-radius: 7px 7px 0px 0px;
        transition-duration: 0.3s;
        &:hover {
            transform: scale(1.04);
        }

        &:hover .cardHover {
            transform: translateY(-10px);
        }
`;

export const CardTitle = styled.p`
color: #7A77D0;
font-weight: bold;
font-size: 17px;
    
`;

export const CardDescription = styled.h5`
font-family: 'Circular',sans-serif;
font-weight: 400;
font-size: 22px;   
`;

export const CardFooterText = styled.p`
font-family: 'Roboto'
sans-serif;
font-weight: lighter;
font-size: 17px;
position: absolute;
bottom: 10px;
`;