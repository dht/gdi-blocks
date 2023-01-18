import React, { useContext } from 'react';
import { Wrapper, Greeting, Container, Skill, H1 } from './Hero.style';

export const id = 'com.usegdi.blocks.about-ply03';

export type HeroProps = {
    strings: HeroStrings;
    colors: HeroColors;
    extra: HeroExtra;
};

export type HeroStrings = {
    slogan?: string;
    slogan1?: string;
    header: string;
    description?: string;
};

export type HeroColors = {};

export type HeroExtra = {
    imageUrl: string;
    socialDatasetId: string;
};

export function Hero(props: HeroProps) {
    const { strings, colors, extra } = props;
    const { slogan, slogan1, header, description } = strings;

    return (
        <Wrapper
            className='Hero-container'
            data-testid='Hero-container'
            extra={extra}
        >
            <Container>
                <H1>{header}</H1>
                <Greeting>{slogan}</Greeting>
                <Greeting>{slogan1}</Greeting>
                <Skill>{description}</Skill>
            </Container>
        </Wrapper>
    );
}

export default Hero;
