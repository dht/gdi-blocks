import React, { useContext } from 'react';
import { useDataset } from '@gdi/engine';
import { Container, Image, Wrapper , Span , Button , Text, IconPerson} from './Gallery.style';

export const id = 'com.usegdi.blocks.gallery-ply01';

export type GalleryProps = {
    strings: GalleryStrings;
    colors: GalleryColors;
    extra: GalleryExtra;
};

export type GalleryStrings = {
};

export type GalleryColors = {};

export type GalleryExtra = {
    galleryDatasetId: string;
};

export function Gallery(props: GalleryProps) {
    const { extra } = props;
    const { galleryDatasetId } = extra;
   
    const galleryDataset = useDataset(galleryDatasetId ?? '') ?? {};


    console.log('galleryDataset', galleryDataset);
    
    return (
        <Wrapper
            id='carouselExampleCaptions'
            className='carousel slide'
            data-testid='Gallery-container'
            data-interval="false"
        >
            <Container className='carousel-inner '>
                {galleryDataset.map((item: Json) => (
                    <Container className='carousel-item active '  key={item.id}>
                        <Image
                            src={item.imageUrl}
                            className='d-block w-100'
                            alt='img'
                        />
                        <Container className='carousel-caption d-md-block top'>
                            <Text>{item.title}</Text>
                        </Container>
                    </Container>
                ))}
            </Container>
            <Button
                className='carousel-control-prev'
                type='button'
                data-bs-target='#carouselExampleCaptions'
                data-bs-slide='prev'
            >
                <Span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                ></Span>
                <Span className='visually-hidden'>Previous</Span>
            </Button>
            <Button
                className='carousel-control-next'
                type='button'
                data-bs-target='#carouselExampleCaptions'
                data-bs-slide='next'
            >
                <Span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                ></Span>
                <Span className='visually-hidden'>Next</Span>
            </Button>
         <IconPerson>
           <i className='material-icons iconFont'>person_outline</i>
         </IconPerson>
        </Wrapper>
    );
}

export default Gallery;
