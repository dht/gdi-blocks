import styled from 'styled-components';
import { ServicesColors } from './Services';
import { Grid, mobile, css, device } from '@gdi/engine';

export const Wrapper = styled.div<{ extra: ServicesColors }>`
    background-color: #f6f8fa;
    font-family: 'Ubuntu', sans-serif;
    padding: 60px 0;
    ${mobile(
        css`
            padding-top: 20px;
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

export const GridContainer = styled(Grid.Container)`
    display: grid;
    grid-template-columns: auto auto auto;
    
    ${device(
        'tablet',
        css`
             padding: 0 15px;
             column-gap: 10px;
        `
    )}

    ${mobile(
        css`
            grid-template-columns: repeat(1, auto);
            text-align: center;
            height: 100% !important;
        `
    )}
`;


export const ParentRenderDiv = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 15px;
    color: #888;

    &:nth-child(n + 4) {
        padding: 60px 0 0 0;
    }

    .pad {
        padding-top: 20px;
    }

    ${device(
        'tablet',
        css`
             flex-direction: column;
             &:nth-child(n + 4) {
            padding: 60px 0 0 0;
    } 
        `
    )}
 
     ${mobile(
        css`
          flex-direction: column;
        `
    )}
`;

export const RenderItem = styled.div`
    
    .check {
        font-size: 70px;
    }

    .descr {
        font-size: 14px;
        padding-bottom: 22px;
        color: #888;
    }
`;

export const Skill = styled.div`
    font-size: 18px;
    line-height: 23px;
    max-width: 100%;
    word-wrap: break-all;
    color: #333;
    margin-bottom: 15px;
    font-weight: 200;
    ${mobile(
        css`
            text-align: center;
        `
    )}
`;

export const SkillAncher = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    line-height: 23px;
    font-weight: 300;
    max-width: 100%;
    color: #1d9d73;;
    cursor: pointer;

    &:hover {
        color: #333;
    }
    ${mobile(
        css`
            text-align: center;
            align-items: center;
            justify-content: center;
        `
    )}
`;