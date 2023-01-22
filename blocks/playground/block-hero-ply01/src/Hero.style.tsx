import styled from 'styled-components';
import { mobile, css, device } from '@gdi/engine';
import { Parallax } from '@gdi/block-base';

export const Wrapper = styled(Parallax)`
    flex: 1;
    min-height: ${(props) => props.theme.vh(78)};

    ${mobile(
        css`
            min-height: ${(props) => props.theme.vh(75)};
        `
    )};
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    font-family: ${(props) => props.theme.fontFamily};
`;

export const Box = styled.div`
    background-color: white;
    width: 800px;
    height: 40%;
    padding: 30px 50px;
    text-align: center;
    border-radius: 20px 20px 0 0;
    box-shadow: 0 0 0px 10px rgba(255, 255, 255, 0.5),
        0 0 10px rgba(0, 0, 0, 0.5);

    ${device(
        '720p',
        css`
            height: 45%;
        `
    )}
    ${device(
        'tablet',
        css`
            height: 35%;
            width: 90%;
        `
    )}
    ${device(
        'mobile',
        css`
            height: 42%;
            width: 90%;
        `
    )}
`;

export const H1 = styled.h1`
    font-size: 50px;
    font-weight: 500;
    margin: 10px 0 30px;
    color: #163c60;
    text-align: center;
    white-space: nowrap;
    ${mobile(
        css`
            font-size: 26px;
        `
    )};
`;

export const Greeting = styled.div`
    color: black;
    background-color: #ffffff44;
    padding: 2px 30px;
    border-radius: 5px;
    font-size: 24px;
    font-weight: bold;
    font-variation-settings: 'wdth' 125, 'wght' 350;
    white-space: nowrap;
    ${mobile(
        css`
            white-space: break-spaces;
            font-size: 16px;
        `
    )};
`;

export const Button = styled.div`
    color: #163c60;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    margin-top: 2px;
    margin-bottom: 30px;
    font-variation-settings: 'wdth' 125, 'wght' 350;
    background-color: white;
    padding: 20px;
    border: 1px solid #163c60;
    ${mobile(
        css`
            text-align: center;
        `
    )};

    &:hover {
        background-color: #163c60;
        color: white;
    }
`;

export const Social = styled.div``;
