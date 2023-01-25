import styled from 'styled-components';
import { mobile, css, device } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-color: #072136;
    color: #fff;
    padding: 50px 0;
    font-size: 18px;
    justify-content: space-around;
`;

export const Container = styled.div`
    padding: 10px;
    max-width: 100%;
    ${mobile(css``)}
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    ${mobile(css`
        display: block !important;
    `)}
`;

export const Column = styled.h2`
    font-size: 20px;
    letter-spacing: 0.05em;
    font-weight: 300;
    margin-bottom: 30px;
`;

export const Paragraph = styled.div``;

export const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    line-height: 1.8em;
`;

export const Li = styled.li`
    padding: 0;
    margin: 0;
    list-style-type: none;
`;

export const Copy = styled.div`
    font-size: 12px;
    font-variation-settings: 'wdth' 100, 'wght' 300;
    width: 60%;
    line-height: 1.6em;
`;

export const Link = styled.div`
    font-size: 16px;
    font-variation-settings: 'wdth' 100, 'wght' 300;
    &:hover {
        cursor: pointer;
        text-decoration-line: none;
        color: #8699c8;
    }
`;

export const Details = styled.div`
    font-size: 14px;
    font-variation-settings: 'wdth' 100, 'wght' 300;
    letter-spacing: 0.05em;
    font-weight: 300;
    line-height: 1.6em;
`;

export const Section = styled.div<{ isSection?: boolean }>`
    ${device(
        'tablet',
        css`
            flex-basis: min-content;
        `
    )}

    ${mobile(
        css`
            display: ${(props) => (props?.isSection ? 'none' : 'block')};
        `
    )}
`;