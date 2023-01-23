import styled from 'styled-components';
import { GalleryExtra } from './Gallery';
import { Grid, mobile, device, css } from '@gdi/engine';

export const Wrapper = styled.div`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 300;
    .top {
        top: 225px;
    }

    ${device(
        '720p',
        css`
            .top {
                top: 75px;
            }
        `
    )}
    ${device(
        'tablet',
        css`
            .top {
                top: 60px;
            }
        `
    )}
    ${mobile(
        css`

        padding-top:  40px;
            .top {
                top: 10px;
            }
            
        `
    )}
`;

export const Container = styled.div``;

export const Image = styled.img``;

export const Span = styled.span``;

export const Button = styled.button``;

export const Text = styled.span`
    font-size: 45px;
    color: white;
    text-align: center;
    margin: 0;
    ${mobile(
        css`
            font-size: 30px;
        `
    )}
`;

export const IconPerson = styled.div`
    background-color: #1d9d73;
    width: 71px;
    height: 50px;
    border-radius: 1000px;
    text-align: center;
    padding: 4px;
    position: fixed;
    right: 15px;
    top: 120px;
    z-index: 999;
    cursor: pointer;
    transition: transform 0.3s;
    .iconFont {
        font-size: 40px;
        &:hover {
            transform: scale(1.1);
        }
    }
`;
