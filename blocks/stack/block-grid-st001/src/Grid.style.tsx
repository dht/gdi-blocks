import styled from 'styled-components';
import { mobile, css } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-color: white;
    min-height: ${(props) => props.theme.vh(88)};
    ${mobile(
        css`
            min-height: ${(props) => props.theme.vh(100)};
        `
    )};
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    font-family: ${(props) => props.theme.fontFamily};
`;
