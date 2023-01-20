import styled from 'styled-components';
import { ParallaxProps } from './Parallax';

export const Wrapper = styled.div<{ props: ParallaxProps }>`
    flex: 1;
    position: relative;
    overflow: hidden;
    display: flex;
    background-image: url(${(p) => p.props.placeholderImageUrl});
    background-size: cover;
    background-position: 80% 0;

    &.running {
        .back {
            background-image: url(${(p) => p.props.backImageUrl});
            animation-name: moveLeft;
        }

        .front {
            background-image: url(${(p) => p.props.frontImageUrl});
            animation-name: moveTop;
        }

        &.mobile {
            .back {
                background-image: url(${(p) => p.props.backImageUrlMobile});
            }

            .front {
                background-image: url(${(p) => p.props.frontImageUrlMobile});
            }
        }
    }
`;

export const Back = styled.div`
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation-duration: 6200ms;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;

    @keyframes moveLeft {
        0% {
            background-position: 80% 0;
        }
        100% {
            background-position: 50% 0;
        }
    }
`;

export const Front = styled.div`
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation-duration: 6200ms;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    background-position: 50% 0;

    @keyframes moveTop {
        0% {
            transform: translateY(100px) scale(1.1);
        }
        100% {
            transform: translateY(0px) scale(1);
        }
    }
`;

export const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
`;
