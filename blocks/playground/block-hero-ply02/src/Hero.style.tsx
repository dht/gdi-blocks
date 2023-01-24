import styled from 'styled-components';
import { HeroExtra } from './Hero';
import { mobile, css, device } from '@gdi/engine';

export const Wrapper = styled.div`
    background-color: white;
    background-size: cover;
    height: auto;
    color: #000;
    padding-top: 90px;
    padding-bottom: 100px;
    font-family: 'Circular',sans-serif !important;


    ${device(
        'HD',
            css`
                padding-top: 30px;
                padding-bottom: 50px;
            `
    )}

    ${device(
        '720p',
            css`
                padding-bottom: 50px;
                padding-left: 0px;
                padding-top: 20px;
                
            `
    )}

    ${device(
        'tablet'
            ,css`
                height: 120vh;
                padding-top: 30px;
                
            
            `)}

    ${mobile(
        css`
            height: 110vh;
            padding-top: 50px;            
        `
    )}
`;

export const HeroButton = styled.button`
    margin-top: 30px;
    padding: 20px 44px;
    border-radius: 30px;
    font-size: 17px;
    margin-bottom: 20px;
    color: white;
    border: none;
    font-weight: bold;
    cursor: pointer;
    background-color: #5c6ac4;


    ${device(
        'tablet',
            css`
                padding: 15px 25px;
                margin-top: 20px;
                font-size: 15px;
            `
    )}
    ${mobile(
        css`
            padding: 15px 20px;
            font-size: 15px;
            margin-top: 20px;
          margin-left: 20px;

        `
    )}
`;

export const P = styled.p`
    font-weight: normal;
    font-size: 22px;
    color: #666666;

    ${device(
        'tablet',
            css`
                font-size: 17px;
            `
    )}
    ${mobile(
        css`
            font-size: 18px;
            line-height: 27px;
            padding-left: 25px;
            padding-right: 40px;
        `
    )}
`;


export const HeroImg = styled.div<{ extra: HeroExtra }>`
    background-image: url(${(props) => props.extra.imageUrl});
    height: 490px;
    width: 90%;
    background-repeat: no-repeat;
    margin-top: 50px;
    background-size: 100% 100%;

    ${device(
        '720p',
        css`
            height: 400px;
        `
    )}

    ${device(
        'tablet',
        css`
            height: 360px;
        `
    )};

    ${mobile(
        css`
            height: 250px;
            background-size: 100% 100%;
            width: 89%;
            margin : 0px 10px;
        `
    )}
`;

export const Client = styled.img`

        height: auto;
        max-width: 100%;
        
        ${device(
            'tablet',
            css`
                
            `
        )};

        ${device(
            '720p',
            css`
               
            `
        )};

        ${mobile(
            css`
               
            `
        )};
`;


export const ClientIcon = styled.div`

            ${mobile(
                css`
                    margin-left: 7px;
                    margin-right: -11px;
                `
            )}
`;


export const Container = styled.div``;
export const Row = styled.div`
    .p-40px {
        padding: 40px;
    }

    ${device(
        'tablet',
            css`
                .p-40px {
                    padding: 0px;
                }
            `
    )}

    ${mobile(
        css`
            .p-40px {
                padding: 10px;
            }
        `
    )}
`;
export const Column = styled.div``;


export const H1 = styled.h1`
    font-size: 60px;
    padding: 0;
    vertical-align: baseline;
    color: black;
    font-family: 'Circular',sans-serif;
    word-spacing: 5px;
    font-weight:400;
    margin-bottom: 10px;
    line-height:72px;
    font-style:normal;


    ${device(
        'HD',
            css`
                margin-top: 50px;
                font-size: 45px;
                line-height: 39px;
            `
    )}

    ${device(
        '720p',
            css`
                font-size: 43px;
                line-height: 40px;
                margin-top: 65px !important;
            `
    )};
     

    ${device(
        'tablet',
            css`
                line-height: 50px;
                font-size: 38px;
            `
    )}
    
    ${mobile(
        css`
            font-size: 37px;
            line-height: 35px;
            padding-left: 25px;

        `
    )}
`;
