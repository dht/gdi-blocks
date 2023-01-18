import React, { useContext } from 'react';
import {
    Container,
    Wrapper,
    Greeting,
    Container1,
    H2,
    Skill,
    H1,
} from './Hero.style';
import { SiteContext, useDataset } from '@gdi/engine';

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

    const { ga } = useContext(SiteContext);

    const onClick = (url: string) => () => {
        ga('navigate', {
            category: 'hero',
            label: url,
        });
    };

    return (
        <Wrapper
            className='Hero-container'
            data-testid='Hero-container'
            extra={extra}
        >
            <Container1>
                <H1>{header}</H1>
                <Greeting>{slogan}</Greeting>
                <Greeting>{slogan1}</Greeting>
                <Skill onClick={() => onClick}>{description}</Skill>
            </Container1>
        </Wrapper>
    );
}

export default Hero;
