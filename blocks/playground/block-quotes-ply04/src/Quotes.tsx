import React, { useContext } from 'react';
import { Container, H1, Wrapper, Greeting, Skill, Social } from './Hero.style';
import { SocialIcons } from '@gdi/web-ui';
import { SiteContext, useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.quotes-ply04';

export type QuotesProps = {
    strings: HeroStrings;
    colors: HeroColors;
    extra: QuotesExtra;
};

export type HeroStrings = {
    slogan?: string;
    header: string;
    description?: string;
};

export type HeroColors = {};

export type QuotesExtra = {
    imageUrl: string;
    socialDatasetId: string;
};

export function Quotes(props: QuotesProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description } = strings;
    const { socialDatasetId } = extra;

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
                <Greeting>{slogan}</Greeting>
                <H1>{header}</H1>
                <Skill>{description}</Skill>
                <Social>
                    <SocialIcons grayscale urls={urls} onClick={onClick} />
                </Social>
            </Container>
        </Wrapper>
    );
}

export default Quotes;
