import React, { useContext } from 'react';
import { H1, Wrapper, Greeting, Skill, Container1 } from './Hero.style';

export const id = 'com.usegdi.blocks.hero-ply01';

export type HeroProps = {
    strings: HeroStrings;
    colors: HeroColors;
    extra: HeroExtra;
};

export type HeroStrings = {
    slogan?: string;
    header: string;
    description?: string;
};

export type HeroColors = {};

export type HeroExtra = {
    imageUrl: string;
    socialDatasetId: string;
};

export function Hero(props: HeroProps) {
    const { strings, extra } = props;
    const { slogan, header, description } = strings;

    return (
        <Wrapper
            className='Hero-container'
            data-testid='Hero-container'
            extra={extra}
        >
            <Container1>
                <Greeting>{slogan}</Greeting>
                <H1>{header}</H1>
                <Skill>{description}</Skill>
            </Container1>
        </Wrapper>
    );
}

export default Hero;
