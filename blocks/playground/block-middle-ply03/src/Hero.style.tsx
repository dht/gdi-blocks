import styled from 'styled-components';
import { HeroColors } from './Hero';
import { Grid, mobile, css } from '@gdi/engine';

export const Wrapper = styled.div<{ extra: HeroColors }>`
    background-color: #f6f8fa;;
    height: ${(props) => props.theme.vh(88)};
    padding-top: 60px;
    padding-left: 12px;
    ${mobile(
        css`
        padding-top:20px;
            padding-left: 0;
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
`;

export const H1 = styled.h1`
    font-size: 35px;
    margin: 10px 0;
    max-width: 100%;
    padding: 0;
    color: #333;
    font-weight: 300;
    text-align: center;
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
    font-size: 14px;
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
`;


export const GridContainer = styled(Grid.Container)`
 display: grid;
  grid-template-columns: auto auto auto;
  ${mobile(
        css`
             grid-template-columns: repeat(1, auto);
             text-align: center;
             height: 100% !important;
        `
    )}
`;

export const Social = styled.div``;
