import styled from 'styled-components';
import { GalleryExtra } from './Gallery';
import { Grid, mobile, device, css } from '@gdi/engine';

export const Wrapper = styled.div`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 300;
    .top {
        top: 210px;
    }

    ${device(
        '4k',
        css`
            .top {
                top: 540px;
            }
        `
    )}
    ${device(
        '2k',
        css`
            .top {
                top: 320px;
            }
        `
    )}
      ${device(
        '1080p',
        css`
            .top {
                top: 220px;
            }
        `
    )}
    ${device(
        'HD+',
        css`
            .top {
                top: 190px;
            }
        `
    )}
    ${device(
        'HD',
        css`
            .top {
                top: 145px;
            }
        `
    )}

    ${device(
        '720p',
        css`
            .top {
                top: 140px;
            }
        `
    )}
    ${device(
        'tablet',
        css`
            .top {
                top: 140px;
            }

            .carousel-inner {
                height: 400px;
                img {
                    height: 400px;
                    object-fit: cover;
                    object-position: 50% 50%;
                }
            }
        `
    )}
    ${mobile(
        css`
            /* padding-top: 40px; */
            .top {
                top: 220px;
            }

            .carousel-inner {
                height: 600px;
                img {
                    height: 600px;
                    object-fit: cover;
                    object-position: 50% 50%;
                }
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
