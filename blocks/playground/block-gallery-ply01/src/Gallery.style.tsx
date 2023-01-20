import styled from 'styled-components';
import { GalleryExtra } from './Gallery';
import { Grid, mobile, device, css } from '@gdi/engine';

export const Wrapper = styled.div`
   font-family: 'Ubuntu', sans-serif;
    /* height: ${(props) => props.theme.vh(63)}; */

    .top {
        top: 225px;
    }

    ${device(
        '720p',
        css`
        .top {
                top: 185px;
            }

           /* height: ${(props) => props.theme.vh(100)};
            .carousel-inner {
                /* transform: scale(2.2); */
               // padding-top: 65px;
            } */
        `
    )}
    ${device(
        'tablet',
        css`
            /* .top {
                top: 0px;
            }

            height: ${(props) => props.theme.vh(30)};
            .carousel-inner {
                transform: scale(2.2);
                padding-top: 65px;
            } */
        `
    )}
    ${mobile(
        css`
            /* height: ${(props) => props.theme.vh(63)};
            .carousel-inner {
                width: 100%;
                transform: scale(4.1);
                padding-top: 65px;
            } */
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
    ${device(
        '720p',
        css`
            /* font-size: 25px; */
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
    transition: transform .3s;
    .iconFont {
        font-size: 40px;
        &:hover {
            transform: scale(1.1); 
        }
    }
`