import React from 'react';
import { Badge, ButtonCta, PriceTag } from '@gdi/block-base';
import { ModelViewer } from 'isokit';
import {
    BadgeWrapper,
    CtaWrapper,
    PriceTagWrapper,
    Slogan,
    Wrapper,
} from './Hero.style';
import { useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.hero-ouywy';

export type HeroProps = {
    strings: HeroStrings;
    colors: HeroColors;
    extra: HeroExtra;
};

export type HeroStrings = {
    slogan?: string;
    priceNote?: string;
};

export type HeroColors = {};

export type HeroExtra = {
    imageUrl: string;
    currentPrice: number;
    previousPrice?: number;
    hudDatasetId: string;
};

export function Hero(props: HeroProps) {
    const { strings, extra } = props;
    const { slogan, priceNote } = strings;
    const { currentPrice, previousPrice, hudDatasetId, imageUrl } = extra;

    const hudData = useDataset(hudDatasetId ?? '', true) ?? {};

    const { config, items, timeline } = hudData as Json;

    return (
        <Wrapper
            imageUrl={imageUrl}
            className='Hero-wrapper'
            data-testid='Hero-wrapper'
        >
            <Slogan>{slogan}</Slogan>
            <ModelViewer config={config} items={items} timeline={timeline} />
            <PriceTagWrapper>
                <PriceTag
                    currentPrice={currentPrice}
                    previousPrice={previousPrice}
                    priceNote={priceNote}
                />
            </PriceTagWrapper>
            <BadgeWrapper>
                <Badge />
            </BadgeWrapper>
            <CtaWrapper>
                <ButtonCta />
            </CtaWrapper>
        </Wrapper>
    );
}

export default Hero;
