import React from 'react';
import { H1, Wrapper, Greeting, Box } from './Hero.style';
import { ButtonBase } from '@gdi/block-base';

export const id = 'com.usegdi.blocks.hero-plylx';

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
    placeholderImageUrl: string;
    backImageUrl: string;
    frontImageUrl: string;
    socialDatasetId: string;
};

export function Hero(props: HeroProps) {
    const { strings, extra } = props;
    const { slogan, header, button } = strings;

    return (
        <Wrapper {...extra} data-testid='Hero-container'>
            <Box>
                <Greeting>{slogan}</Greeting>
                <H1>{header}</H1>
                <ButtonBase>{button}</ButtonBase>
            </Box>
        </Wrapper>
    );
}

export default Hero;
