import styled from 'styled-components';
import { ServicesColors } from './Services';
import { Grid, mobile, device, css } from '@gdi/engine';

export const Wrapper = styled.div<{ extra: ServicesColors }>`
    background-color: #ffffff;
    /* height: ${(props) => props.theme.vh(60)}; */
    font-family: 'Ubuntu', sans-serif;
    padding: 50px 0;

    ${device('720p', css``)}
    ${device(
        'tablet',
        css`
            .tabletView {
                padding: 0px 19px 0 18px;
              /* width: ${(props) => props.theme.vw(100)}; */
            }
            
        `
    )}
    ${mobile(css``)}
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

export const H2 = styled.h2`
    font-size: 35px;
    margin: 10px 0;
    max-width: 100%;
    padding: 0;
    color: #333;
    font-weight: 400;
    text-align: center;
    line-height: 1.2307em;
    padding-bottom: 35px;

    &:hover {
        color: #333;
    }
    ${mobile(
        css`
            font-size: 25px;
        `
    )}
`;

export const Skill = styled.div`
    font-size: 14px;
    line-height: 22px;
    max-width: 100%;
    text-align: center;
    color: #888;
    margin-bottom: 30px;

    ${device(
        'tablet',
        css`
            /* width: ${(props) => props.theme.vw(93)}; */
        `
    )}
    ${mobile(
        css`
            text-align: center;
        `
    )}
`;

export const SkillAncher = styled.div`
    font-size: 20px;
    line-height: 23px;
    max-width: 100%;
    color: #1d9d73;
    margin: 20px 0 15px;
    font-weight: 300;
    cursor: pointer;
    &:hover {
        color: #333;
    }
    ${device(
        '720p',
        css`
            font-size: 20px;
        `
    )}

    ${device(
        'tablet',
        css`
            font-size: 16px;
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
    text-align: center;
    &:nth-child(2) {
        margin: 0 30px;
    }
    ${device(
        '720p',
        css`
            width: 30%;
        `
    )}
    ${device(
        'tablet',
        css`
            &:nth-child(2) {
                margin: 0 10px;
            }
        `
    )}
    ${mobile(
        css`
            padding-left: 12px;
            padding-right: 12px;
            width: 100%;
        `
    )}
`;

export const RederImage = styled.img`
    transition: transform 0.3s;
    width: 100%;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`;

export const RenderDiv = styled.div`
    overflow: hidden;
`;

export const IconArrow = styled.div`
    height: 42px;
    width: 42px;
    color: #1d9d73;
    position: fixed;
    bottom: 90px;
    right: 20px;
    z-index: 99;
    border-radius: 42px;
    text-align: center;
    font-size: 27px;
    border: 1px solid #1d9d73;
    cursor: pointer;
    &:hover {
        color: #fff;
        background-color: #1d9d73;
    }

    ${device(
        'tablet',
        css`
            display: none;
        `
    )}
`;
