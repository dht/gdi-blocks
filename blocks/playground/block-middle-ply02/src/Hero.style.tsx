import styled from 'styled-components';
import { HeroColors } from './Hero';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div<{ extra: HeroColors }>`
    background-color: #ffffff;
    height: ${(props) => props.theme.vh(88)};
    /* width: 100%;
    height: 100%;; */
    ${mobile(
        css`
          height: 100%;
        `
    )}
`;

export const Container = styled(Grid.Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    ${mobile(
        css`
         padding-left: 10px;
         padding-right: 10px;
         
        `
    )}
`;

export const H1 = styled.h1`
    font-size: 35px;
    margin: 10px 0;
    max-width: 100%;
    padding: 0;
    color: #333;
    font-weight: 300;
    text-align: center;
    ${mobile(
        css`
          font-size: 25px;
        `
    )}
`;

export const Greeting = styled.div`
    color: #33334499;
    background-color: #ffffff44;
    padding: 2px 30px;
    border-radius: 5px;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    font-variation-settings: 'wdth' 125, 'wght' 350;
`;

export const Skill = styled.div`
    font-size: 14px;
    line-height: 23px;
    max-width: 100%;
    word-wrap: break-word;
    color: #888;
    margin-top: 2px;
    margin-bottom: 30px;
    
    ${mobile(
        css`
            text-align: center;
        `
    )}
`;

export const SkillAncher = styled.div`
    font-size: 22px;
    line-height: 23px;
    max-width: 100%;
    word-wrap: break-word;
    color: #888;
    margin-top: 12px;
    margin-bottom: 30px;
    cursor: pointer;
    ${mobile(
        css`
            text-align: center;
        `
    )}

@media(max-width:768px){
    font-size: 20px;
   }
`;

export const GridContainer = styled(Grid.Container)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;
    ${mobile(
        css`
            flex-direction: column;
        `
    )}
   @media(max-width:768px){
    max-width: 100% !important;
    column-gap: 15px;
   }
    
`;

export const GridItem = styled(Grid.Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 30px;

    ${mobile(
        css`
           padding-left: 12px;
           padding-right: 12px;
        `
    )}

@media(max-width:768px){
   width:30% !important;
   }
    `

export const Social = styled.div``;
