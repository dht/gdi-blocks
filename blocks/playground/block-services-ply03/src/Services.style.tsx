import styled from 'styled-components';
import { ServicesColors } from './Services';
import { Grid, mobile, device, css } from '@gdi/engine';

export const Wrapper = styled.div<{ extra: ServicesColors }>`
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: ${(props) => props.theme.vh(88)};
    padding-top: 25px;
    ${mobile(
        css`
            height: auto;
        `
    )}
`;

export const Container = styled(Grid.Container)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    column-gap: 40px;
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
    font-size: 18px;
    line-height: 23px;
    max-width: 100%;
    word-wrap: break-word;
    color: #888;
    margin-top: 20px;
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
    flex: 1;

    ${device(
        '720p',
        css`
            column-gap: 15px;
        `
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
    flex: 1;
    padding-top: 12px;
    ${device(
        '720p',
        css`
            width: 30% !important;
        `
    )}

    ${mobile(
        css`
            padding-left: 12px;
            padding-right: 12px;
            width: 100% !important;
        `
    )}
`;

export const Infortmation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: ${(props) => props.theme.vw(38)};
   
`

export const ReadIcon = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 18px;
    
    .check {
        font-size: 41px;
        color: #888;
        cursor: pointer;
        background-color: #f6f8fa;
       border-radius: 50%;
       /* border: 1px solid grey; */
        padding: 10px;
    }
    `