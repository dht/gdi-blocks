import styled from 'styled-components';
import { ServicesColors } from './Services';
import { Grid, mobile, css, device } from '@gdi/engine';

export const Wrapper = styled.div<{ extra: ServicesColors }>`
    background-color: #f6f8fa;
    height: ${(props) => props.theme.vh(50)};
    font-family: ubuntu,sans-serif;
    padding-top: 80px;
    padding-left: 12px;
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

export const H1 = styled.h1`
    font-size: 35px;
    margin: 10px 0;
    max-width: 100%;
    padding: 0;
    color: #333;
    font-weight: 300;
    text-align: center;
`;

export const Skill = styled.div`
    font-size: 18px;
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
    font-size: 18px;
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

export const ParentRenderDiv = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 30px;
    color: #888;
    
    .pad {
        padding-top: 20px;
     
    }

    ${device(
        '720p',
        css`
            flex-direction: column;
        `
    )}
`;

export const RenderItem = styled.div`
    
    .check {
        font-size: 70px;
    }
`;

export const RenderImage = styled.img``;
