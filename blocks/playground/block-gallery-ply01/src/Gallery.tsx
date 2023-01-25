import React from 'react';
import { useDataset } from '@gdi/engine';
import {
    Container,
    Image,
    Wrapper,
    Carousel,
    TextContainer,
    PrevSpan,
    Span,
    NextSpan,
    PrevButton,
    NextButton,
    Text,
    IconPerson,
} from './Gallery.style';

export const id = 'com.usegdi.blocks.gallery-ply01';

export type GalleryProps = {
    strings: GalleryStrings;
    colors: GalleryColors;
    extra: GalleryExtra;
};

export type GalleryStrings = {};

export type GalleryColors = {};

export type GalleryExtra = {
    galleryDatasetId: string;
};

export function Gallery(props: GalleryProps) {
    const { extra } = props;
    const { galleryDatasetId } = extra;

    const galleryDataset = useDataset(galleryDatasetId ?? '') ?? {};

    return (
        <Wrapper
            id='carouselExampleCaptions'
            data-testid='Gallery-container'
            data-interval='false'
        >
            <Container>
                {galleryDataset.map((item: Json) => (
                    <Carousel key={item.id}>
                        <Image src={item.imageUrl} alt='img' />
                        <TextContainer>
                            <Text>{item.title}</Text>
                        </TextContainer>
                    </Carousel>
                ))}
            </Container>
            <PrevButton
                data-bs-target='#carouselExampleCaptions'
                data-bs-slide='prev'
            >
                <PrevSpan aria-hidden='true'></PrevSpan>
                <Span>Previous</Span>
            </PrevButton>
            <NextButton
                data-bs-target='#carouselExampleCaptions'
                data-bs-slide='next'
            >
                <NextSpan aria-hidden='true'></NextSpan>
                <Span>Next</Span>
            </NextButton>
            <IconPerson>
                <i className='material-icons iconFont'>person_outline</i>
            </IconPerson>
        </Wrapper>
    );
}

export default Gallery;
