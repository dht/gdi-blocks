import React, { useContext } from 'react';
import { H1, Wrapper, Greeting, Box } from './Hero.style';
import { CustomButtonBase } from '../../../../packages/block-base/src/index';

export const id = 'com.usegdi.blocks.hero-ply01';

export type HeroProps = {
    strings: HeroStrings;
    colors: HeroColors;
    extra: HeroExtra;
};

export type HeroStrings = {
    slogan?: string;
    header: string;
    button?: string;
};

export type HeroColors = {};

export type HeroExtra = {
    imageUrl: string;
    imageUrlMobile: string;
    socialDatasetId: string;
};

export function Hero(props: HeroProps) {
    const { strings, extra } = props;
    const { slogan, header, button } = strings;

    return (
        <Wrapper
            className='Hero-container'
            data-testid='Hero-container'
            {...extra}
        >
            <Box>
                <Greeting>{slogan}</Greeting>
                <H1>{header}</H1>
                <CustomButtonBase>{button}</CustomButtonBase>
            </Box>
        </Wrapper>
    );
}

export default Hero;
