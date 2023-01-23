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
`;

export const MenuItem = styled.div<{ color: string }>`
    padding: 20px;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
        background:${(props) => (props.extra.isTitle ? '#fff' : ' rgba(255, 255, 255, 0.1)')};
        a {
            color: ${(props) => props.color};
        }
    }
`;

export const MenuItemLink = styled.a<{ color: string }>`
    color: ${(props) => props.color};
    text-decoration: none;
    font-size: 18px;
    font-variation-settings: 'wdth' 105, 'wght' 350;
`;
