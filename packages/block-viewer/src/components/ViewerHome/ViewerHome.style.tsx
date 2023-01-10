import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #334;
`;

export const Content = styled.div`
    margin: auto;
    width: 1000px;
    height: 600px;
`;

export const H1 = styled.h1`
    font-size: 40px;
    font-variation-settings: 'wdth' 150, 'wght' 350;
`;

export const LogoWrapper = styled.div`
    position: fixed;
    top: 100px;
    left: 100px;
`;

export const A = styled.button`
    font-size: 24px;
    color: #334;
    text-decoration: none;
    line-height: 1.5;
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    &:visited {
        font-variation-settings: 'wdth' 100, 'wght' 500;
    }
`;

export const Ul = styled.ul`
    columns: 3;
    list-style-position: inside;
`;

export const Li = styled.li``;
