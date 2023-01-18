import React, { useContext } from 'react';
import {
    Container,
    Wrapper,
    Greeting,
    Skill,
    Container1,
    Box,
    H2,
} from './About.style';
import { SiteContext, useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.about-ply02';

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
    const { strings, colors, extra } = props;
    const { slogan, header, description } = strings;

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
                <Box>
                    <H2>Services</H2>
                    <Greeting>{slogan}</Greeting>
                    <Skill onClick={() => onClick}>{description}</Skill>
                </Box>
                <Box>
                    <H2>Projects</H2>
                    <Greeting>{slogan}</Greeting>
                    <Skill onClick={() => onClick}>{description}</Skill>
                </Box>
                <Box>
                    <H2>Clients</H2>
                    <Greeting>{slogan}</Greeting>
                    <Skill onClick={() => onClick}>{description}</Skill>
                </Box>
            </Container1>
        </Wrapper>
    );
}

export default Hero;
