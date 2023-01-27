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

export const Column = styled.div``;

export const Header = styled.h3 `
    font-size: 48px;
    font-weight: 500;
    font-family: 'Circular', sans-serif;
    color: white;

        ${device(
            '720p',
                css`
                    font-size: 40px;
                `
        )}
        ${device(
            'tablet',
            css`
                font-size: 25px;
                margin-top: 14px;
            `
        )}

${mobile(
    css`
        font-size: 25px;
    `
)}
`

export const ContactBack = styled.div`
background-color: #7A77D0;
padding: 90px 200px 90px 200px;

    ${device(
        'HD',
            css`
                padding: 90px;
            `
    )}
    ${device(
        '720p',
            css`
                padding: 70px;
            `
    )}

    ${device(
        'tablet',
            css`
                padding: 50px;
            `
    )}
    ${mobile(
        css`
            padding: 18px;
            padding-top: 90px;
            padding-bottom: 90px;
        `
    )}

`;


export const ContactImage = styled.img`
   max-height: 330px;
   height: 330px;

   ${device(
    '720p',
        css`
            height: 300px;
        `
   )}

   ${device(
        'tablet',
            css`
                max-height: 250px;
            `
   )}
   ${mobile(
        css`
            height: 260px;
        `
   )}

`

export const EmailBox = styled.input`
    min-height: 47px;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 17px;
    width: 300px;
    color: #666666;
    border-radius: 5px 0 0 5px;

    ${mobile(
        css`
            min-height: 45px;
            padding: 7px;
            font-size: 16px;
            width: 150px;
        `
    )}

`;

export const SubmitButton = styled.button`
min-height: 47px;
border: none;
outline: none;
font-size: 17px;
padding: 10px 16px ;
color: white;
background-color: #50B83C;
border-radius: 0 5px 5px 0;
font-weight: bold;
  
  ${mobile(
    css`
        min-height: 45px;
        width: 180px;
        font-size: 15px;
        padding: 10px;
        white-space: nowrap;
    `
  )}
`;

export const SubHeader = styled.p`
    font-size: 22px;
    font-family: 'Roboto' , sans-serif;
font-weight: lighter;
color:white;

margin-bottom: 30px;

    ${mobile(
        css`
            font-size: 16px;
        `
    )}

`;

export const ContainerFluid = styled.div.attrs(()=>({
    className:"p-0 container-fluid"
}))``;

export const Row = styled.div.attrs(()=>({
    className:"row"
}))``;

export const Container = styled.div.attrs(()=>({
    className:"col-lg-12"
}))``;

export const ColumnContainer = styled.div.attrs(()=>({
    className:"col-lg-6 text-center "
}))``;

export const ColumnContainer2 = styled.div.attrs(()=>({
    className:"col-lg-6"
}))``;