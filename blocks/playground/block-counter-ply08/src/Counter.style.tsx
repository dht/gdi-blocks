import styled from 'styled-components';
import { Grid, mobile, css, device } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-color: white;
    color: black;
    border-top: 1px solid silver;
    padding-bottom: 75px;

    ${mobile(
        css`
            padding: 60px 0;
        `
    )}
`;

export const SubTitle = styled.p`
    font-size: 22px;
    color: #666666;
    font-weight: lighter;
    font-family: 'Roboto', sans-serif;

    ${device(
        'tablet',
        css`
            font-size: 17px;
        `
    )}

    ${mobile(
        css`
            font-size: 17px;
        `
    )}
`;

export const Container = styled(Grid.Container)`
    padding: 70px;

    ${device(
        'tablet',
        css`
            padding: 30px;
        `
    )}
    ${mobile(
        css`
            padding: 10px;
        `
    )}
`;

export const Row = styled(Grid.Row)`
    padding: 30px 0px 0px 0px;

    ${device(
        'tablet',
        css`
            padding: 20px;
        `
    )}

    ${mobile(
        css`
            .mobile-padding {
                padding-left: 30px;
                padding-right: 30px;
            }
            padding: 10px;
        `
    )}
`;

export const H1 = styled.h3`
    font-size: 48px;
    letter-spacing: 2px;
    font-variant: normal;
    font-weight: 400;
    font-style: normal;
    font-family: 'Circular', sans-serif;

    ${device(
        'tablet',
        css`
            font-size: 35px;
        `
    )}

    ${mobile(
        css`
            font-size: 25px;
            white-space: nowrap;
        `
    )}
`;

export const Card = styled.div.attrs(() => ({
    className: 'card',
}))`
    transition-duration: 0.4s;
    margin-top: 14px;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
            0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
            0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
    }

    ${mobile(
        css`
            margin-top: 20px;
        `
    )}
`;
export const CardBody = styled.div.attrs(() => ({
    className: 'card-body',
}))`
    padding: 40px 10px 40px 40px;

    ${device(
        'tablet',
        css`
            padding: 20px;
        `
    )}

    ${device(
        'mobile',
        css`
            padding: 40px;
        `
    )}
`;
export const Icon = styled.span.attrs(() => ({
    className: 'material-symbols-outlined',
}))`
    font-size: 37px;
    font-weight: bold;
    color: #5752d0;
    background-color: #eeedfa;
    padding: 13px;
    border-radius: 50%;

    ${device(
        'tablet',
        css`
            font-size: 27px;
        `
    )}
`;
export const CounterCard = styled.h3`
    font-size: 54px !important ;
    margin-top: 7px;
    font-weight: 600;
    font-style: normal;
    font-family: 'Circular', sans-serif;

    ${device(
        'HD',
          css`
            font-size: 35px !important;
          `
    )}

    ${device(
        'tablet',
        css`
            font-size: 30px !important;
        `
    )}
`;

export const CardTitle = styled.span`
    font-size: 22px;
    color: #666666;
    font-weight: lighter;
    font-family: 'Roboto', sans-serif;

    ${device(
        'HD',
            css`
                font-size: 20px;
            `
    )}

    ${device(
        'tablet',
        css`
            font-size: 14px;
            
        `
    )}

    ${mobile(
        css`
            font-size: 17px;
        `
    )}
`;

export const HeadingColumn = styled(Grid.Column)`
    text-align: center;
`;

export const CardContainer = styled(Grid.Column).attrs(() => ({
    className: 'mobile-padding',
}))`


    ${device(
        'tablet',
            css`
                padding: 0px;
            `
    )}

    
`;

export const Column = styled.div.attrs(()=>({
    
}))`
    width: 25%;

    ${device(
        'tablet',
            css`
                width: 25%;
                
            `
    )}

    ${mobile(
        css`
            width: 100%;
        `
    )}


`
