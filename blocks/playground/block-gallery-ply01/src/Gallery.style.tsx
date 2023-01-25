import styled from 'styled-components';
import { GalleryExtra } from './Gallery';
import { Grid, mobile, device, css } from '@gdi/engine';

export const Wrapper = styled.div.attrs(()=>({
    className: 'carousel slide'
}))`
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

export const Container = styled.div.attrs(()=>({
    className:'carousel-inner'
}))``;

export const Carousel = styled.div.attrs(()=>({
    className: 'carousel-item active'
}))``;

export const Image = styled.img.attrs(()=>({
    className: 'd-block w-100'
}))``;

export const TextContainer = styled.div.attrs(()=>({
    className: 'carousel-caption d-md-block top'
}))``;

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

export const PrevButton = styled.button.attrs(()=> ({
    className: 'carousel-control-prev',
    type: 'button',
}))``;

export const NextButton = styled.button.attrs(()=>({
    className: 'carousel-control-next',
    type: 'button'
}))``;

export const PrevSpan = styled.span.attrs(()=>({
    className:'carousel-control-prev-icon'
}))``;

export const NextSpan = styled.span.attrs(() => ({
    className:'carousel-control-next-icon'
}))``;

export  const Span = styled.span.attrs(() => ({
    className:'visually-hidden'
}))``;

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
