import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
`;

export const MenuItem = styled.div`
    padding: 20px;
    cursor: pointer;
    text-align: center;

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
    font-size: 24px;
    font-variation-settings: 'wdth' 110, 'wght' 350;
`;

export const Button = styled.button`
    float: right;
    background-color: transparent;
    border: none;
    color: white;

    i {
        font-size: 40px;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    animation-duration: 0.5s;
    background-image: radial-gradient(
        circle at center,
        #092a42 0%,
        #0f324b 50%,
        #0d3d60 100%
    );
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.hideOverlay {
        display: none;
    }

    &.disableOverlay {
        pointer-events: none;
    }
`;

export const Close = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    border: none;
    color: white;

    i {
        font-size: 40px;
    }
`;
