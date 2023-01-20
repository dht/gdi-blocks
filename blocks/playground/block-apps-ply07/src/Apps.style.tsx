import styled from 'styled-components';
import { Grid, mobile, css, device } from '@gdi/engine';
import { AppsExtra } from './Apps';

export const Wrapper = styled.div`
    flex: 1;
    background-size: cover;
    background-position: center bottom;
    background-color: white;
    color: black;
    height: ${(props) => props.theme.vh(88)};
    display: flex;
    padding-top: 70px;
    border-top: 1px solid silver;
    font-family: ${(props) => props.theme.fontFamily};

    ${device(
        'tablet',
            css`
                height: 70vh;
            `
    )}

    ${device(
        '720p',
            css`
                height: 97vh;
            `
    )}
    

    ${device(
        'mobile',
            css`
                
             height: 120vh;
            `
        
        )}
`;



export const H1 = styled.h1`
    font-size: 50px;
    padding: 0;
    color: black;
    text-align: center;
    font-weight:500;

     
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
    font-size: 22px;
    color: #666666;
    font-family: 'Roboto', sans-serif;
`;




export const Row = styled.div``;
export const Column = styled.div``;





export const CarouselInner = styled.div``;
export const Carousel = styled.div``;

export const CarouselItem = styled.div`
    .carousel-container {
        display: flex;

    }
    ${device(
        'mobile',
            css`
                .carousel-container {
                    flex-direction :column-reverse ;
                }
               
            `
    )}
`;

export const CarouselContainer = styled.div``

export const CarouselPrev = styled.button``;
export const CarouselNext = styled.button``;


export const ClientImage = styled.img`
    min-height: 270px !important;
    height: 100%;
    width: 99%;
    border-radius: 0px 10px 10px 0px;
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
            width: 100%;
            height: 300px;
            border-radius: 10px 10px 0px 0px;
        `
    )}
`;

export const CarouselPrevIcon = styled.span`
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
export const CarouselNextIcon = styled.span`
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

    ${device('tablet',
        css`
            
            font-size: 15px;
        `
    )}
`;

export const CarouselSubContainer = styled.div`
    width: 100%;
    border: 0.8px solid #B5B5B5;
    padding: 50px;
    border-right: none;
    border-radius: 10px 0px 0px 10px;
    
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
                    margin-top: 0px;
                }
                .margintop-p {
                    margin-top: 0px;
                }
                padding: 20px;
                padding-bottom: 10px;
            `
    )}

    ${device(
        'tablet',
            css`
                .margintop {
                    margin-top: 0px;
                }
            `
    )}

    ${mobile(
        css`
            border: 0.8px solid #B5B5B5;
            border-radius: 0px 0px 10px 10px;
            border-top: none;
            padding: 17px;
            .margintop {
                margin-top: 20px;
            }
        `
        )}


`

export const CarouselSubContainer2 = styled.div`
    border-radius: 0px 10px 10px 0px;
    overflow: hidden;
    
    ${device(
        'tablet',
            css`
                min-height: 270px;

            `
    )}

    ${mobile(
        css`
        border-radius: 10px 10px 0px 0px;
        `
    )}

`;


export const ClientLogo = styled.img`
    height:45px;
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





export const Container = styled.div``;



