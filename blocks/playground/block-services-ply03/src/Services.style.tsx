import styled from 'styled-components';
import { ServicesColors } from './Services';
import { Grid, mobile, device, css } from '@gdi/engine';

export const Wrapper = styled.div<{ extra: ServicesColors }>`
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Ubuntu', sans-serif;
    margin: 0 auto;
    padding: 69px 0;

    ${device(
        'tablet',
        css`
           padding-left: 14px;
        `
    )}
`;

export const Container = styled(Grid.Container)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 40px;
    flex: 1;

    ${device(
        'tablet',
        css`
            justify-content: flex-start;
            align-items: flex-start;
            column-gap: 22px;
        `
    )}

    ${mobile(
        css`
            padding-left: 10px;
            padding-right: 10px;
            flex-direction: column;
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

    ${device(
        'tablet',
        css`
            font-size: 32px;
        `
    )}

    ${mobile(
        css`
            font-size: 25px;
            text-align: ;
            padding-top: 30px;
        `
    )}
`;

export const Skill = styled.div`
    font-size: 14px;
    line-height: 23px;
    max-width: 100%;
    word-wrap: break-all;
    color: #888;
    margin-top: 20px;
    margin-bottom: 30px;

    ${mobile(
        css`
            text-align: start;
        `
    )}
`;

export const SkillAncher = styled.span`
    font-size: 20px;
    line-height: 23px;
    max-width: 100%;
    word-wrap: break-all;
    font-weight: 300;
    color: #888;
    text-decoration: none;

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
            column-gap: 15px; ;
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

    ${mobile(
        css`
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

    ${device(
        'tablet',
        css`
              width: ${(props) => props.theme.vw(47)};
        `
    )}

    ${mobile(
        css`
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            max-width: 100%;
        `
    )}
`;

export const ReadIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 18px;
    cursor: pointer;
    .check {
        font-size: 30px;
        color: #1d9d73;
        background-color: #f6f8fa;
        border-radius: 50%;
        padding: 15px;
    }
    &:hover {
        .check {
            color: #fff;
            background-color: #1d9d73;
        }
    }
`;

export const Image = styled.img`
    ${device(
        'tablet',
        css`
            height: 405px;
            width: 330px;
        `
    )}
    ${mobile(
        css`
            width: ${(props) => props.theme.vw(90)}; ;
        `
    )}
`;

export const Figure = styled.div``;
