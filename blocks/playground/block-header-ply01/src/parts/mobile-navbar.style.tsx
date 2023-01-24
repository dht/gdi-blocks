import styled from 'styled-components';

export const Wrapper = styled.div`
    font-family: 'Ubuntu', sans-serif;
    flex: 1;
`;

export const MenuItem = styled.div`
    padding: 14px 25px 16px;
    cursor: pointer;
    width: 100%;

    &:hover {
         background: #1d9d73;
         a {
             color: #fff;
         }
     }

`;

export const MenuItemLink = styled.a`
    color: #1d9d73;
    text-decoration: none;
    font-size: 14px;
`;

export const Button = styled.button`
    float: left;
    background-color: transparent;
    border: none;
    color: #000;
    background-color: #fff;
    width: 100%;
    position: fixed;
    z-index: 999;
    top: 0;

    i {
        font-size: 35px;
        float: left;
    }
`;

export const Span = styled.span`
    position: fixed;
    top: -6px;
    left: 50px;
    color: #000;
    font-size: 24px;
    line-height: 48px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 60%;
    animation-duration: 0.5s;
    background-color: #fff;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 999;
   padding-top: 50px;
    &.hideOverlay {
        display: none;
    }

    &.disableOverlay {
        pointer-events: none;
    }
`;


export const Close = styled.button`
    position: absolute;
    right: 185px !important;
    top: 15px;
    background-color: transparent;
    border: none;
    color: #000;

    i {
        font-size: 25px;
    }
`;
