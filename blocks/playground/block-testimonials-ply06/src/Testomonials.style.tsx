import styled from 'styled-components';
import { mobile, css, device } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-size: cover;
    background-position: center bottom;
    background-color: white;
    color: rgb(0, 0, 0);
    display: flex;

    padding: 100px 0;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;

    font-family: ${(props) => props.theme.fontFamily};

    ${device(
        '720p',
        css`
            height: 97vh;
        `
    )};
    ${device(
        'tablet',
        css`
            height: auto;
            min-height: 600px !important;
        `
    )};

    ${device(
        'mobile',
        css`
            padding-top: 70px;
            height: 120vh;
            padding-bottom: 0;
        `
    )}
`;

export const H1 = styled.h3`
    font-size: 42px;
    padding: 0;
    color: black;
    text-align: center;
    font-weight: 500;
    font-family: 'Circular', sans-serif;

    ${device(
        'tablet',
        css`
            font-size: 35px;
        `
    )}

    ${mobile(
        css`
            font-size: 30px;
        `
    )}
`;

export const SubTitle = styled.p`
    font-size: 18px;
    color: #666666;
    font-family: 'Roboto', sans-serif;
    padding-bottom: 30px;
`;

export const CarouselItem = styled.div`
    .carousel-container {
        display: flex;
    }
    ${device(
        'mobile',
        css`
            .carousel-container {
                flex-direction: column-reverse;
            }
        `
    )}
`;

export const ClientImage = styled.img`
    min-height: 270px !important;
    height: 100%;
    width: 99%;
    border-radius: 0 10px 10px 0;
    background-size: cover !important;

    ${device(
        'tablet',
        css`
            position: absolute;
            overflow: hidden;
            width: 60%;
            height: 270px;
        `
    )}
    ${mobile(
        css`
            position: static;
            width: 120%;
            height: 210px;
            transform: translateX(-30px);
            border-radius: 10px 10px 0 0;
        `
    )}
`;

export const CarouselPrevIcon = styled.span.attrs(() => ({
    className: 'shadow material-symbols-outlined',
}))`
    background-color: white;
    position: absolute;
    left: -40px;
    font-size: 30px;
    font-weight: bolder !important;
    color: black;
    padding: 18px;
    border-radius: 50%;

    ${device(
        'tablet',
        css`
            padding: 10px;
            left: -30px;
        `
    )}

    ${mobile(
        css`
            display: none;
        `
    )}
`;
export const CarouselNextIcon = styled.span.attrs(() => ({
    className: 'shadow material-symbols-outlined',
}))`
    background-color: white;
    position: absolute;
    right: -40px;
    font-size: 30px;
    font-weight: bolder !important;
    color: black;
    padding: 18px;
    border-radius: 50%;

    ${device(
        'tablet',
        css`
            padding: 10px;
            right: -30px;
        `
    )}

    ${mobile(
        css`
            display: none;
        `
    )}
`;

export const ClientName = styled.span`
    font-weight: 500;
    font-size: 18px;
    color: rgb(34, 34, 34);
    font-style: normal;

    ${device(
        'tablet',
        css`
            font-size: 15px;
        `
    )}
`;

export const CarouselSubContainer = styled.div`
    width: 100%;
    border: 0.8px solid #b5b5b5;
    padding: 50px;
    border-right: none;
    border-radius: 10px 0 0 10px;

    .margintop-p {
        margin-top: 25px;
    }

    .margintop {
        margin-top: 50px;
    }

    ${device(
        'tablet',
        css`
            .margintop {
                margin-top: 0;
            }
            .margintop-p {
                margin-top: 0;
            }
            padding: 20px 20px 10px 20px;
        `
    )}

    ${mobile(
        css`
            border-top: 0;
            border-radius: 0 0 10px 10px;
            border: none;
            position: relative;
            left: 20px;
            padding-right: 40px;
            right: 20px;
            padding-left: 0;

            .margintop {
                margin-top: 20px;
            }
        `
    )}
`;

export const CarouselSubContainer2 = styled.div`
    border-radius: 0 10px 10px 0;
    overflow: hidden;
    width: 100%;
    ${device(
        'tablet',
        css`
            min-height: 270px;
        `
    )}

    ${mobile(
        css`
            border-radius: 10px 10px 0px 0px;
            padding-left: 50px;
            padding-right: 50px;
        `
    )}
`;

export const ClientLogo = styled.img`
    height: 45px;
    ${device(
        'tablet',
        css`
            height: 30px;
        `
    )}
`;

export const ClientSign = styled.img`
    height: 40px;

    ${device(
        'tablet',
        css`
            height: 30px;
        `
    )}
`;

export const Span = styled.span`
    color: rgb(102, 102, 102);
`;

export const P = styled.p`
    font-size: 20px;
    color: rgb(102, 102, 102);
    font-style: normal;
    font-weight: 300;
    line-height: 28.8px;

    ${device(
        'tablet',
        css`
            font-size: 14px;
            line-height: 21px;
        `
    )}
`;

export const Container = styled.div.attrs(() => ({
    className: 'container mobile-padding-0',
}))``;

export const VisuallyHidden = styled.span``;

export const HeadingColumn = styled.div`
    text-align: center;
`;

export const Row = styled.div.attrs(() => ({
    className: 'row',
}))``;

export const Carousel = styled.div.attrs(() => ({
    className: 'carousel slide',
}))``;

export const CarouselInner = styled.div.attrs(() => ({
    className: 'carousel-inner',
}))``;

export const CarouselContainer = styled.div.attrs(() => ({
    className: 'carousel-container ',
}))``;
export const CarouselPrev = styled.button.attrs(() => ({
    className: 'carousel-control-prev',
}))``;

export const CarouselNext = styled.button.attrs(() => ({
    className: 'carousel-control-next',
}))``;