import styled from 'styled-components';
import { ServicesColors } from './Services';
import { Grid, mobile, device,css } from '@gdi/engine';

export const Wrapper = styled.div<{ extra: ServicesColors }>`
    background-color: #ffffff;
    height: ${(props) => props.theme.vh(88)};

    ${mobile(
        css`
          height: auto;
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
    ${device(
        '720p', 
        css`
            font-size: 20px;
        `
    )}

    ${mobile(
        css`
            text-align: center;
        `
    )}
  
`;

export const GridContainer = styled(Grid.Container)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;

    ${device(
        '720p', 
        css`
          column-gap: 15px;   `
    )}

    ${mobile(
        css`
            flex-direction: column;
        `
    )}
    
`;

export const GridItem = styled(Grid.Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 30px;

    ${device(
        '720p', 
        css`
           width:30% !important; `
    )}

    ${mobile(
        css`
           padding-left: 12px;
           padding-right: 12px;
           width: 100% !important;
        `
    )}
    `
