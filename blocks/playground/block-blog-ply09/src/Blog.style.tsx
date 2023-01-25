import styled from 'styled-components';
import { mobile, css, device, Grid } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-size: cover;
    background-position: center bottom;
    background-color: white;
    color: black;
    display: flex;
    padding: 120px 0;
    border-top: 1px solid silver;
    font-family: ${(props) => props.theme.fontFamily};

    ${device(
        '720p',
        css`
            height: auto;
        `
    )}

    ${device(
        'tablet',
        css`
            padding-top: 70px;
            height: auto;
        `
    )}


    ${device(
        'mobile',
        css`
            padding-bottom: 70px;
            padding-top: 70px;
            height: auto;
        `
    )}
`;



export const Column = styled.div`
    ${mobile(
        css`
            padding-left: 30px;
            padding-right: 30px;
        `
    )}
`;

export const Header = styled.h3`
    font-size: 48px;
    font-weight: 500;
    font-family: 'Circular', sans-serif;

    ${device(
        'tablet',
        css`
            font-size: 40px;
        `
    )}

    ${mobile(
        css`
            font-size: 30px;
        `
    )}
`;

export const SubHeader = styled.p`
    font-size: 22px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: RGB(102, 102, 102);

    ${device(
        'tablet',
        css`
            font-size: 16px;
        `
    )}

    ${mobile(
        css`
            font-size: 16px;
        `
    )}
`;

export const Card = styled.div.attrs(()=>({
    className:"card p-0"
}))`
    overflow: hidden;
    transition-duration: 0.3s;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
            0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
            0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
    }
`;
export const CardHeader = styled.div.attrs(()=>({
    className:"card-header bg-light p-0"
}))`
    overflow: hidden;
`;

export const CardBody = styled.div.attrs(()=>({
    className:"card-body"
}))`
    min-height: 200px;
    padding: 30px;
`;

export const CardImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 7px 7px 0px 0px;
    transition-duration: 0.3s;
    &:hover {
        transform: scale(1.04);
    }

    &:hover .cardHover {
        transform: translateY(-10px);
    }

    ${device(
        'tablet',
        css`
            border-radius: 4px 4px 0px 0px;
        `
    )}

    ${mobile(
        css`
            border-radius: 3px 3px 0px 0px;
        `
    )}
`;

export const CardTitle = styled.span`
    color: #7a77d0;
    font-weight: bold;
    font-size: 17px;
`;

export const CardDescription = styled.h5`
    font-family: 'Circular', sans-serif;
    font-weight: 400;
    margin-top: 6px;
    font-size: 22px;

    ${device(
        'tablet',
        css`
            font-size: 18px;
        `
    )}
    ${mobile(
        css`
            font-size: 17px;
        `
    )}
`;

export const CardFooterText = styled.p`
    font-family: 'Roboto' sans-serif;
    font-weight: lighter;
    font-size: 17px;
    position: absolute;
    bottom: 10px;

    .label2::before {
        content: '•';
        color: #b5b5b5;
        font-size: 20px;
        line-height: 18px;
        margin: 0 7px;
    }
`;

export const Label = styled.label``;

export const Container = styled.div.attrs(()=>({
    className:"container"
}))``;

export const HeadingRow = styled.div.attrs(()=>({
    className:"row"
}))``;

export const HeadingColumn = styled.div.attrs(()=>({
    className:" col-lg-12 text-center "
}))``;

export const Row = styled.div.attrs(()=>({
    className:"row"
}))``;

export const BlogCard = styled.div.attrs(()=>({
    className:"col-lg-4 mt-5 mobile-padding"
}))``;