import styled from 'styled-components';
import { mobile, css } from '@gdi/engine';
import {IMenuItem , IMenuItemColorFont} from "./TopMenu"
export const Wrapper = styled.div<{ extra: IMenuItemColorFont }>`
    flex: 1;
    background-color: ${(props) => (props.extra.isColor ? props.extra.backgroundColor : `#333`)} ; 
    font-family: ${(props) => (props.extra.isColor ? props.extra.fontFamily : `Encode Sans, sans-serif`)} ; 
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1100px;
    margin-left: 200px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 0 gold;

    ${mobile(css`
        display: none;
    `)}
`;

export const MenuItem = styled.div<{ extra: IMenuItem }>`
    padding: 20px;
    cursor: pointer;
    flex: ${(props) => (props.extra.isFlex ? 'auto' : 'none')};
    &:hover {
        background:${(props) => (props.extra.isTitle ? '#fff' : ' rgba(255, 255, 255, 0.1)')};
        a {
            color: ${(props) => (props.extra.isTitle ? '#333' : '#f2c973')};
        }
    }
`;

export const MenuItemLink = styled.a <{ extra: IMenuItem }>`
    color: ${(props) => (props.extra ? '#333' : '#fff')};
    text-decoration: none;
    font-size: 18px;
    font-variation-settings: 'wdth' 110, 'wght' 650;
`;
