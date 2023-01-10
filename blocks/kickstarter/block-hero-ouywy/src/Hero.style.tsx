import styled from 'styled-components';

export const Wrapper = styled.div<{ imageUrl: string }>`
    flex: 1;
    height: 90vh;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-top: 12vh;
`;

export const Slogan = styled.div`
    font-family: 'Bitter';
    font-size: 50px;
    color: #112;
    font-variation-settings: 'wdth' 100, 'wght' 600;
`;

export const BadgeWrapper = styled.div`
    position: absolute;
    top: 5vh;
    left: 5vw;
    filter: sepia(0.6) hue-rotate(20deg);
`;

export const PriceTagWrapper = styled.div`
    position: absolute;
    top: 5vh;
    right: 5vw;
`;

export const CtaWrapper = styled.div`
    position: absolute;
    bottom: 5vh;
    right: 5vw;
    filter: sepia(0.6) hue-rotate(20deg);
`;
