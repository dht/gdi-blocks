import styled from 'styled-components';
import { IMenuMobile } from '../TopMenu';
export const Wrapper = styled.div<{ mobileMenus: IMenuMobile  }>`
    position: ${(props) =>
        props.mobileMenus.isPostionChanged ? props.mobileMenus.position : 'relative'};
    z-index: ${(props) =>
        props.mobileMenus.isPostionChanged ? props.mobileMenus.zIndex : 0};
    flex: 1;
    background-color: ${(props) =>
        props.mobileMenus.isPostionChanged ? props.mobileMenus.backgroundColor : 'transparent'};
        width: 100%;
        font-family: ${(props) =>
        props.mobileMenus.isPostionChanged ? props.mobileMenus.fontFamily : 'none'}
`;

export const MenuItem = styled.div<{ mobileMenus: IMenuMobile  }>`
    padding:   ${(props) =>
        props.mobileMenus.isPostionChanged ? '10px' : '20px'};
    cursor: pointer;
    text-align: center;
    &:hover {
        background: rgba(255, 255, 255, 0.1);
        &:nth-child(n + 2) {
        background-color: #1d9d73;
      
        width: 100%;
        }
        a {
            color: ${(props) =>
        props.mobileMenus.isPostionChanged ? props.mobileMenus.backgroundColor : '#f2c973'};
        }
    }

    &:nth-child(2){
        display: none;
    }

    

`;

export const MenuItemLink = styled.a<{ mobileMenus: IMenuMobile  }>`
   color: ${(props) =>
        props.mobileMenus.isPostionChanged ? props.mobileMenus.color : '#fff'};
    text-decoration: none;
    font-size: ${(props) =>
        props.mobileMenus.isPostionChanged ? `${props.mobileMenus.fontSize}px`  : '25px'};;
    font-variation-settings: 'wdth' 110, 'wght' 350;

`;

export const Button = styled.button <{ mobileMenus: IMenuMobile  }>`
    float: ${(props) => props.mobileMenus.isPostionChanged ? props.mobileMenus.float : 'right'};
    background-color: transparent;
    border: none;
    color: ${(props) => props.mobileMenus.isPostionChanged ? '#000000' : '#fff'};

    i {
        font-size: 40px;
    }
`;

export const Overlay = styled.div <{ mobileMenus: IMenuMobile  }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: ${(props) => props.mobileMenus.isPostionChanged?  '70%' : '100%' };
    animation-duration: 0.5s;
    background-image: ${(props) => props.mobileMenus.isPostionChanged? `radial-gradient(
        circle at center,
        #fff 0%,
        #fff 50%,
        #fff 100%
    )` : `radial-gradient(
        circle at center,
        #092a42 0%,
        #0f324b 50%,
        #0d3d60 100%
    )`};
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.mobileMenus.isPostionChanged?  'flex-start' : 'center' };
    justify-content: ${(props) => props.mobileMenus.isPostionChanged?  'flex-start' : 'center' };
    padding: ${(props) => props.mobileMenus.isPostionChanged?  '50px 10px' : '0' };
    
  
    &.hideOverlay {
        display: none;
    }

    &.disableOverlay {
        pointer-events: none;
    }

`;

export const Close = styled.button <{ mobileMenus: IMenuMobile  }>`
    position: absolute;
    top: 20px;
    right:  ${(props) => props.mobileMenus.isPostionChanged?  '220px' : '20px' };
    background-color: transparent;
    border: none;
   
    color: ${(props) => props.mobileMenus.isPostionChanged?  '#000000' : '#fff' };

    i {
        font-size: {(props) => props.mobileMenus.isPostionChanged?  '35px' : '40px' };
    }
`;
