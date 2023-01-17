import React, { useContext } from 'react';
import { Container, H1, Wrapper, Greeting, Skill, Social } from './Hero.style';
import { SocialIcons } from '@gdi/web-ui';
import { SiteContext, useDataset } from '@gdi/engine';

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
    const { strings, colors, extra } = props;
    const { slogan, header, description } = strings;
    const { socialDatasetId } = extra;
    console.log(props);
    const { ga } = useContext(SiteContext);

    const social = useDataset(socialDatasetId);
    const urls = Object.values(social).map((i: Json) => i.url);

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
                <Container>
                    <H1>{header}</H1>
                </Container>
            </Wrapper>
    );
}

export default Hero;
