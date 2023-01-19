import styled from 'styled-components';
import { mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-color: #163c60;
    font-family: 'Encode Sans', sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 0 gold;
    justify-content: flex-end;
    ${mobile(css`
        display: none;
    `)}
`;

export const MenuItem = styled.div<{ extra: any }>`
    padding: 20px;
    cursor: pointer;
    flex: ${(props) => (props.extra ? 'auto' : 'none')};
    &:hover {
        background: rgba(255, 255, 255, 0.1);

        a {
            color: #f2c973;
        }
    }
`;

export const MenuItemLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-variation-settings: 'wdth' 110, 'wght' 650;
`;
