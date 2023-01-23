import styled from 'styled-components';
import { mobile, Grid, css, device } from '@gdi/engine';

export const Wrapper = styled.div`
    flex: 1;
    background-color: #163c60;
    display: flex;
    padding: 100px 0 90px;
    flex-direction: column;
    font-family: ${(props) => props.theme.fontFamily};
    color: #ccd;

    ${mobile(css`
        height: auto;
        max-height: none;
        padding: 80px 0;
    `)}
`;

export const Container = styled(Grid.Container)`
    flex-direction: column;
    align-items: center;
`;

export const H2 = styled.h2`
    font-size: 37px;
    max-width: 400px;
    margin: 0;
    padding: 0;

    ${mobile(css`
        margin-top: 40px;
        text-align: center;
        font-size: 40px;
        line-height: 58px;
    `)}
`;

export const Description = styled.p`
    font-size: 18px;
    max-width: 500px;
    text-align: justify;
    line-height: 29px;
    color: rgba(255, 255, 255, 0.6);

    ${mobile(css`
        line-height: 34px;
        font-size: 22px;
        font-weight: 300;
        text-align: center;
    `)}
`;
export const Row = styled(Grid.Row)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex: 1;
    width: 70%;
    margin: 30px 0px;

    ${mobile(css`
        margin: 0px 0px;
        width: auto;
        flex-direction: column;
        width: 85%;
    `)}
`;

export const Column = styled(Grid.Column)<{ isButton?: boolean }>`
    flex: 1;
    display: flex;
    flex-direction: column;

    ${mobile(css`
        margin: 30px 0;
        display: ${(props) => (props.isButton ? 'contents' : 'flex')};
    `)}
`;

export const IconWrapperName = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    i {
        font-size: 40px;
        position: absolute;
        left: 40.5%;
    }

    ${mobile(css`
        display: none;
    `)}
`;

export const IconWrapperEmail = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    i {
        font-size: 40px;
        position: absolute;
        right: 25%;
    }

    ${mobile(css`
        display: none;
    `)}
`;

export const ContactTitle = styled.div`
    font-size: 32px;
    padding: 0;
    padding-left: 15px;
    margin: 0;
    display: block;
    flex-direction: row;
    align-items: center;
    font-variation-settings: 'wdth' 115, 'wght' 400;

    ${mobile(css`
        font-size: 34px;
        padding-left: 0;
        display: contents;
    `)}
`;

export const ContactMessage = styled.div`
    width: 710px;
    font-size: 32px;
    padding: 0;
    padding-left: 15px;
    margin: 0;
    display: block;
    flex-direction: row;
    align-items: center;
    font-variation-settings: 'wdth' 115, 'wght' 400;

    ${device(
        'HD',
        css`
            width: 648px;
        `
    )}

    ${device(
        '720p',
        css`
            width: 468px;
        `
    )}

    ${device(
        'tablet',
        css`
            width: 230px;
        `
    )}

    ${mobile(css`
        font-size: 30px;
        width: 10%;
        display: contents;
    `)}
`;

export const ContactTitle3 = styled.div`
    width: 140px;
    font-size: 32px;
    padding: 0;
    padding-left: 15px;
    margin: 0;
    display: block;
    flex-direction: row;
    align-items: center;
    font-variation-settings: 'wdth' 115, 'wght' 400;

    ${mobile(css`
        font-size: 34px;
    `)}
`;

export const ContactTitleText = styled.div`
    margin-left: 5px;
    flex: 1;
    font-size: 20px;
    font-weight: 500;
    align-self: flex-start;
    /* padding-bottom: 8px; */
    position: relative;
    /* margin-bottom: 60px; */

    ${mobile(css``)}
`;

export const Button = styled.button`
    height: 70px;
    width: 190px;
    color: #163c60;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    margin-top: 2px;
    margin-bottom: 30px;
    background-color: white;
    padding: 20px;
    border: 1px solid white;

    ${mobile(
        css`
            text-align: center;
            width: 285px;
        `
    )};

    &:hover {
        background-color: #163c60;
        color: white;
    }
`;

export const InputContainer = styled.div`
    ${mobile(css`
        text-align: center;
    `)}
`;

export const Input = styled.input<{ isRequired?: boolean }>`
    padding: 10px;
    border: none;
    border-bottom: 2px solid #ccc;
    border-bottom: ${(props) =>
        props.isRequired ? '2px solid red' : '2px solid #ccc'};
    background-color: #163c60;
    font-size: 18px;
    width: 100%;
    color: white;
    padding-bottom: 5px;
    box-sizing: content-box;

    &:focus {
        border-bottom: 2px solid #ccc;
        outline: none;
    }

    ${mobile(css`
        padding: 0px;
    `)}
`;

export const GoogleMapContainer = styled.div`
    height: 40vh;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    align-self: center;
    padding-left: 30px;

    ${device(
        'HD+',
        css`
            width: 60%;
        `
    )}

    ${device(
        'HD',
        css`
            width: 65%;
        `
    )}

    ${device(
        '720p',
        css`
            width: 55%;
        `
    )}

    ${device(
        'tablet',
        css`
            width: 60%;
            padding-left: 0;
        `
    )}
    
    ${mobile(css`
        width: 80%;
        padding-left: 0;
    `)}
`;

export const MapContainer = styled.div`
    width: 50%;
    height: 250px;
    position: relative;
    background: url('https://developers.google.com/static/maps/images/landing/hero_maps_static_api_480.png')
        center / cover;
    align-items: center;
    align-self: center;
    background-size: cover;
    background-position: center;
    position: relative;
    justify-content: center;
`;

export const JobTitle = styled.div`
    font-size: 22px;
    font-weight: bold;
    font-variation-settings: 'wdth' 105, 'wght' 250;
    margin-top: 8px;
    margin-bottom: 10px;

    ${mobile(css`
        font-size: 28px;
        text-align: center;
    `)}
`;

export const LineRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    ${mobile(css`
        flex-direction: column;
        align-items: center;
    `)}
`;

export const Period = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 21px;

    ${mobile(css`
        margin-top: 8px;
        color: goldenrod;
    `)}
`;

export const Year = styled.div``;

export const Dash = styled.div`
    padding: 0 3px;
`;

export const JobCompany = styled.div`
    font-size: 27px;
    font-weight: bold;
    font-variation-settings: 'wdth' 105, 'wght' 350;
    color: gold;

    ${mobile(css`
        font-size: 28px;
        text-align: center;
    `)}
`;

export const Items = styled.div``;

export const Item = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    padding: 20px;
`;

export const JobDescription = styled.p`
    font-size: 18px;
    max-width: 500px;
    text-align: justify;
    line-height: 29px;
    color: rgba(255, 255, 255, 0.6);

    ${mobile(css`
        line-height: 34px;
        font-size: 22px;
        font-weight: 300;
        text-align: center;
    `)}
`;
