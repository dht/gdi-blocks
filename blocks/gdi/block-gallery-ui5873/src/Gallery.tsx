import React, { useContext } from 'react';
import { Wrapper, Container, H2 } from './Gallery.style';
import { LocalGallery } from '@gdi/web-ui';
import { SiteContext, useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.gallery-ui5873';

export type GalleryProps = {
    strings: GalleryStrings;
    colors: GalleryColors;
    extra: GalleryExtra;
};

export type GalleryStrings = {
    header: string;
};

export type GalleryColors = {};

export type GalleryExtra = {
    galleryDatasetId: string;
};

export function Gallery(props: GalleryProps) {
    const { strings, extra } = props;
    const { header } = strings;
    const { galleryDatasetId } = extra;
    const Gallery = useDataset(galleryDatasetId);

    const { ga } = useContext(SiteContext);

    function onClick(item: Json) {
        ga('navigate', {
            category: 'gallery',
            label: item.id,
            source: 'Gallery',
        });
    }

    function onView(item: Json) {
        ga('view', {
            category: 'gallery',
            label: item.id,
            source: 'Gallery',
        });
    }

    function onTagChange(tagId: string) {
        ga('component', {
            category: 'gallery',
            label: 'tagChange',
            tagId,
            source: 'Gallery',
        });
    }

    return (
        <Wrapper className='Gallery-wrapper' data-testid='Gallery-wrapper'>
            <Container>
                <H2 id='Gallery'>{header}</H2>
                <LocalGallery
                    items={Gallery}
                    lightMode
                    itemsPerRow={2}
                    itemHeight={376}
                    onClick={onClick}
                    onView={onView}
                    onTagChange={onTagChange}
                />
            </Container>
        </Wrapper>
    );
}

export default Gallery;
