import styled from 'styled-components';
import { mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-color: #163c60;
    font-family: 'Encode Sans', sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const MenuItem = styled.div<{ color: string; extra: any }>`
    padding: 20px;
    cursor: pointer;
    white-space: nowrap;
    flex: ${(props) => (props.extra ? 'auto' : 'none')};

    &:hover {
        background: rgba(255, 255, 255, 0.1);

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
