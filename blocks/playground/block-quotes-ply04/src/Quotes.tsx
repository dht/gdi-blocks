import React, { useContext } from 'react';
import { Container, H1, Wrapper, Greeting, Skill, Social } from './Quotes.style';
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
                
            </Container>
        </Wrapper>
    );
}

export default Quotes;
