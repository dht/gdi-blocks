import React, { useContext } from 'react';
import { Container, H1, Wrapper} from './Gallery.style';


export const id = 'com.usegdi.blocks.gallery-ply01';

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
    imageUrl: string;
    galleryDataset: string;
};

export function Gallery(props: GalleryProps) {
    const { strings, colors, extra } = props;
    const {header } = strings;
    const { galleryDataset} = extra;

    return (
            <Wrapper
                className='Gallery-container'
                data-testid='Gallery-container'
                extra={extra}
            >
                <Container>
                    <H1>{header}</H1>
                </Container>
            </Wrapper>
    );
}

export default Gallery;
