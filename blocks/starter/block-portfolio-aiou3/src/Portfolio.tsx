import React, { useContext } from 'react';
import { LocalGallery } from '@gdi/web-ui';
import {
    Container,
    Wrapper,
    H2,
    Description,
    GalleryWrapper,
} from './Portfolio.style';
import { SiteContext, useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.portfolio-aiou3';

export type PortfolioProps = {
    strings: PortfolioStrings;
    colors: PortfolioColors;
    extra: PortfolioExtra;
};

export type PortfolioStrings = {
    header: string;
    description?: string;
};

export type PortfolioColors = {};

export type PortfolioExtra = {
    portfolioDatasetId: string;
};

export function Portfolio(props: PortfolioProps) {
    const { strings, colors, extra } = props;
    const { header, description } = strings;
    const { portfolioDatasetId } = extra;

    const items = useDataset(portfolioDatasetId);

    const { ga } = useContext(SiteContext);

    function onClick(item: Json) {
        ga('navigate', {
            category: 'gallery',
            label: item.id,
            source: 'portfolio',
        });
    }

    function onView(item: Json) {
        ga('view', {
            category: 'gallery',
            label: item.id,
            source: 'portfolio',
        });
    }

    function onTagChange(tagId: string) {
        ga('component', {
            category: 'gallery',
            label: 'tagChange',
            tagId,
            source: 'portfolio',
        });
    }

    return (
        <Wrapper
            className='Portfolio-container'
            data-testid='Portfolio-container'
            colors={colors}
        >
            <Container>
                <H2>{header}</H2>
                <Description>{description}</Description>
                <GalleryWrapper>
                    <LocalGallery
                        items={items}
                        onClick={onClick}
                        onView={onView}
                        onTagChange={onTagChange}
                    />
                </GalleryWrapper>
            </Container>
        </Wrapper>
    );
}

export default Portfolio;
