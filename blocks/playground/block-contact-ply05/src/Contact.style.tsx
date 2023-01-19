import styled from 'styled-components';
import { mobile, Grid, css } from '@gdi/engine';

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
    width: 1200px;

    ${mobile(css`
        width: auto;
        flex-direction: column;
    `)}
`;

export const Column = styled(Grid.Column)`
    flex: 1;
    margin: 30px 50px;
    display: flex;
    flex-direction: column;

    ${mobile(css`
        margin: 30px 0;
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

export const ContactTitle = styled.h3`
    font-size: 32px;
    padding: 0;
    padding-left: 15px;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-variation-settings: 'wdth' 115, 'wght' 250;

    ${mobile(css`
        font-size: 34px;
    `)}
`;

export const ContactTitleText = styled.div`
    margin-left: 5px;
    flex: 1;
    align-self: flex-start;
    padding-bottom: 8px;
    position: relative;
    left: 30%;
    margin-bottom: 60px;

    ${mobile(css`
        text-align: center;
    `)}
`;

export const Input = styled.input`
    padding: 10px;
    border: none;
    border-bottom: 2px solid #ccc;
    background-color: #163c60;
    font-size: 20px;
    width: 50%;
    height: 30px;
    color: white;
    padding-bottom: 5px;
    box-sizing: content-box;

    &:focus {
        padding: 10px;
        border-bottom: 4px solid #ccc;
        outline: none;
    }
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
