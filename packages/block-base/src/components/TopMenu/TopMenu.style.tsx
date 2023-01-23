import styled from 'styled-components';
import { mobile, css, device } from '@gdi/engine';
import { IMenuItem, IMenuItemColorFont } from './TopMenu';

export const Wrapper = styled.div<{ extra: IMenuItemColorFont }>`
    flex: 1;
    background-color: ${(props) =>
        props.extra.isColor ? props.extra.backgroundColor : `#333`};
    font-family: ${(props) =>
        props.extra.isColor
            ? props.extra.fontFamily
            : `Encode Sans, sans-serif`};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) =>
        props.extra.isColor ? 'flex-end' : `center`};
`;

export const MenuItem = styled.div<{ colorFont: IMenuItemColorFont }>`
    padding: 15px;
    cursor: pointer;
    white-space: nowrap;

    &:nth-child(1) {
        position: absolute;
        left: 300px;

        & > :first-child {
            font-size: 35px;
            font-weight: 500;
        }
    }

    &:nth-child(5) {
        padding-right: 350px;
    }

    &:hover {
        background: ${(props) =>
            props.colorFont.isColor
                ? props.colorFont.backgroundColor
                : 'rgba(255, 255, 255, 0.1)'};
        a {
            color: ${(props) => props.colorFont.textColor};
        }
    }

    ${device(
        'tablet',
        css`
            &:nth-child(1) {
                position: absolute;
                left: 50px;
            }

            &:nth-child(5) {
                padding-right: 100px;
            }
        `
    )}
`;

export const MenuItemLink = styled.a<{ colorFont: IMenuItemColorFont }>`
    color: ${(props) => props.colorFont.textColor};
    text-decoration: none;
    font-size: ${(props) =>
        props.colorFont.isColor ? props.colorFont.fontSize + 'px' : '18px'};
    font-variation-settings: 'wdth' 105, 'wght' 350;
`;
