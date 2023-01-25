import styled from 'styled-components';
import {  mobile, css, device, Grid } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-size: cover;
    background-position: center bottom;
    background-color: white;
    color: black;
    
    display: flex;
    padding-top: 0px;
    padding-bottom: 0px;
    font-family: 'Circular',sans-serif;


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

export const Column = styled.div`
    &.text-align-right {
        text-align: right;
    }


    ${device(
        'tablet',
            css`
                &.text-align-right {
                text-align: center;
                margin-top: 14px;
    }
            `
    )}

    ${mobile(
        css`
            &.text-align-right {
            text-align: center;

    }

        `
    )}

`;


export const FooterBack = styled.div`
background-color : black;
padding: 60px 200px 50px 200px;
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
                .footer-text-center {
                    text-align: center;
                }
                padding: 50px;
                padding-left: 20px;
            `
    )}
    ${mobile(
        css`
            .padding-left-sm-30px {
                padding-left: 30px;
            }
            padding-top: 50px;
            padding-left: 0px;
        `
    )}

`;




export const FooterText = styled.h2`
    color: #969E9E;
    font-weight: bold;
    font-size: 19.6px;
    font-family: 'Circular',sans-serif;

    ${mobile(
        css`
            font-size: 17px;
            text-align: center;
            white-space: nowrap;
        `
    )}
`;

export const FooterButton = styled.button`
    padding: 15px 45px ;
    border-radius: 30px;
    font-size: 17px;
    font-weight: bold;
    color: black;
    margin-top: -33px;
    background-color: white;
    outline: none;
    border: none;

    ${mobile(
        css`
            padding: 10px 15px ;
            font-size: 15px;
            margin-top: 10px;

        `
    )}
`;

export const DividerLine = styled.div`
    background-color: #666666;
    height: 1px;

    width: 100%;
    position: absolute;

`;

export const FooterList = styled.ul`
    text-decoration: none;
    list-style-type: none;
    font-family: 'Circular',sans-serif;
    
    ${mobile(
        css`
            padding: 16px;
        `
    )}


`;

export const FooterListItems = styled.li`
    margin-top: 20px;
    font-size: 17px;
    color:#A0A0A0;
    font-weight: 600;
    transition-duration: 0.3s;

    cursor: pointer;
    &:hover {
        color: white !important;
    }

    &.listitem {
        margin-top: 10px;
    }
`;

export const FooterIcon = styled.span`
    color: white;
    font-size: 22px;
    font-weight: 400;
`;

export const Address = styled.span`
    font-size: 17px;
    margin-left: 10px;

`;

export const FooterListHeading = styled.span`
    color:#707070;
    font-size: 19px;
    font-family: 'Circular' sans-serif;
    font-weight: 500;
    line-height: 19.2px;

`;

export const FooterEmail = styled.input`
padding: 10px;
margin-top: 14px;
border-radius: 4px 0px 0px 4px;
border: none;
width: 83%;
height: 44px;
font-size: 17px;
outline: none;
    
`;

export const SendButton = styled.button`
padding: 10px;
padding-bottom: 13px;
border-radius: 0px 4px 4px 0px;
border: none;
width: 17%;
height: 45px;
outline: none;
background-color: #5D5A9E;
color: white;
font-size: 17px;

`;

export const LighterText = styled.span`
    color:#707070;
    font-size: 17px;
    position: relative;
    bottom: 35px;
`;