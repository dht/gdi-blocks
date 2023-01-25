import { useDataset } from '@gdi/engine';
import React, { useContext } from 'react';
import {
    Container,
    H1,
    Wrapper,
    Row,
    SubTitle,
    CarouselInner,
    Carousel,
    CarouselItem,
    CarouselPrev,
    CarouselNext,
    CarouselPrevIcon,
    CarouselNextIcon,
    P,
    ClientName,
    Span,
    ClientLogo,
    ClientSign,
    CarouselContainer,
    CarouselSubContainer,
    CarouselSubContainer2,
    ClientImage,
    VisuallyHidden,
    HeadingColumn,
} from './Testomonials.style';

export const id = 'com.usegdi.blocks.testimonials-ply06';

export type TestomonialsProps = {
    strings: TestimonialsStrings;
    colors: TestomonialsColors;
    extra: TestomonialsExtra;
};

export type TestimonialsStrings = {
    slogan?: string;
    header?: string;
};

export type TestomonialsColors = {};

export type TestomonialsExtra = {
    testimonialDataSetId: string;
};

export function Testomonials(props: TestomonialsProps) {
    const { strings, extra } = props;
    const { slogan, header } = strings;
    const { testimonialDataSetId } = extra;
    const testimonialData = useDataset(testimonialDataSetId);

    return (
        <>
            <Wrapper>
                <Container>
                    <HeadingColumn>
                        <H1> {header} </H1>
                        <SubTitle> {slogan} </SubTitle>
                    </HeadingColumn>

                    <Row>
                        <Carousel
                            id='carouselExampleControls'
                            data-bs-ride='carousel'
                        >
                            <CarouselInner>
                                {testimonialData.map(
                                    (clientData: Json, index: number) => {
                                        return (
                                            <>
                                                <CarouselItem
                                                    className={`carousel-item ${
                                                        index === 0
                                                            ? 'active'
                                                            : ''
                                                    } `}
                                                >
                                                    <CarouselContainer>
                                                        <CarouselSubContainer>
                                                            <ClientLogo
                                                                src={
                                                                    clientData.logo
                                                                }
                                                                alt=''
                                                            />
                                                            <P className='margintop-p'>
                                                                {
                                                                    clientData.description
                                                                }
                                                                ”
                                                            </P>
                                                            <ClientSign
                                                                className='margintop'
                                                                src={
                                                                    clientData.sign
                                                                }
                                                            />
                                                            <br />
                                                            <ClientName>
                                                                {
                                                                    clientData.clientName
                                                                }
                                                            </ClientName>
                                                            <br />
                                                            <Span>
                                                                {
                                                                    clientData.clientDesignation
                                                                }
                                                            </Span>
                                                        </CarouselSubContainer>

                                                        <CarouselSubContainer2>
                                                            <ClientImage
                                                                src={
                                                                    clientData.image
                                                                }
                                                                alt='client Image'
                                                            />
                                                        </CarouselSubContainer2>
                                                    </CarouselContainer>
                                                </CarouselItem>
                                            </>
                                        );
                                    }
                                )}
                            </CarouselInner>

                            <CarouselPrev
                                type='button'
                                data-bs-target='#carouselExampleControls'
                                data-bs-slide='prev'
                            >
                                <CarouselPrevIcon aria-hidden='true'>
                                    chevron_left
                                </CarouselPrevIcon>
                                <VisuallyHidden className='visually-hidden'>
                                    Previous
                                </VisuallyHidden>
                            </CarouselPrev>

                            <CarouselNext
                                type='button'
                                data-bs-target='#carouselExampleControls'
                                data-bs-slide='next'
                            >
                                <CarouselNextIcon aria-hidden='true'>
                                    chevron_right
                                </CarouselNextIcon>
                                <VisuallyHidden className='visually-hidden'>
                                    Next
                                </VisuallyHidden>
                            </CarouselNext>
                        </Carousel>
                    </Row>
                </Container>
            </Wrapper>
        </>
    );
}
export default Testomonials;
