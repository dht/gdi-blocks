import styled from 'styled-components';
import { ServicesColors } from './Services';
import { Grid, mobile, device, css } from '@gdi/engine';

export const Wrapper = styled.div<{ extra: ServicesColors }>`
    background-color: #ffffff;
    font-family: 'Ubuntu', sans-serif;
    padding: 49px 0;

    ${device(
        'tablet',
        css`
            .tabletView {
                padding: 0px 10px 0 13px;
            }
        `
    )}

    ${mobile(css`
        .tabletView{
            padding: 0px 5px 0 2px;
        }
    `)}
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
            font-family: 'Ubuntu', sans-serif;
            font-weight: 300;
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

    ${mobile(
        css`
            text-align: center;
        `
    )}
`;

export const GridContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 1;
    flex-wrap: wrap;
    column-gap: 30px;
    align-items: stretch;


    ${mobile(
        css`
            flex-direction: column;
        `
    )}
`;

export const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 31.55%;
    height:  100%;
    .hover-border {
        position: relative;
        span {
            position: relative;
            width: 100%;
            max-width: 100%;
            display: inline-block;
            overflow: hidden;
        }

        span::before {
            top: 0;
            left: 0;
            right: 100%;
            bottom: 100%;
            border-top: 10px solid #1d9d73;
            border-left: 10px solid #1d9d73;
            content: '';
            opacity: 0;
            pointer-events: none;
            z-index: 3;
            position: absolute;
            box-sizing: border-box;
            transition: all 0.5s ease;
            box-shadow: none;
        }

        span:hover::before {
            opacity: 1;
            bottom: 0;
            right: 0;
        }
        span::after {
            left: 100%;
            top: 100%;
            bottom: 0;
            right: 0;
            border-bottom: 10px solid #1d9d73;
            border-right: 10px solid #1d9d73;
            content: '';
            opacity: 0;
            pointer-events: none;
            z-index: 3;
            position: absolute;
            box-sizing: border-box;
            transition: all 0.5s ease;
            box-shadow: none;
        }

        span:hover::after {
            opacity: 1;
            top: 0;
            left: 0;
        }
    }

    ${device(
        '720p',
        css`
            width: 30%;
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

export const RenderDiv = styled.div``;

export const RederImage = styled.img`
    width: 100%;
    transition: all 0.5s linear;
    transform: scale(1);
    cursor: pointer;

    &:hover {
        transform: scale(1.1) !important;
        opacity: 1 !important;
    }
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

export const IconArrow = styled.div<{ isVisible: boolean }>`
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
    display: ${(props) => (props.isVisible ? 'block' : 'none')};
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
