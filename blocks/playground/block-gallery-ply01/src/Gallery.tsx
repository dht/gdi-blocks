import React, { useContext } from 'react';
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
    galleryDataset: Json;
};

export function Gallery(props: GalleryProps) {
    const { extra } = props;
    const { galleryDataset } = extra;

    return (
        <Wrapper
            id='carouselExampleCaptions'
            className='carousel slide'
            data-testid='Gallery-container'
            // data-bs-ride='carousel'
            data-interval="false"
        >
            <Container className='carousel-inner '>
                {galleryDataset.map((item: Json) => (
                    <Container className='carousel-item active '  key={item.id}>
                        <img
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
