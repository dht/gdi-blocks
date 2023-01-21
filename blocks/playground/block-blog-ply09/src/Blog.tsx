import React, { useContext } from 'react';
import {
    Container,
    H1,
    Wrapper,
    Row,
    SubTitle,
    Column,
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
} from './Blog.style';

export const id = 'com.usegdi.blocks.blog-ply09';

export type BlogProps = {
    strings: BlogStrings;
    colors: BlogColors;
    extra: BlogExtra;
};

export type BlogStrings = {
    slogan?: string;
    header: string;
};

export type BlogColors = {};

export type BlogExtra = {
    testimonialDataSet: Json;
};

export function Blog(props: BlogProps) {
    const { strings, extra } = props;
    const { slogan, header } = strings;
    const { testimonialDataSet } = extra;

    return (
        <>
            <Wrapper>
                <Container className='container'>
                    <Row className='row'>
                        <Column className='col-lg-12 text-center'>
                            <H1> {header} </H1>
                            <SubTitle> {slogan} </SubTitle>
                        </Column>
                    </Row>

                    <Row className='row'>
                        <Column className='col-lg-12'>
                            <Carousel
                                id='carouselExampleControls'
                                className='carousel slide'
                                data-bs-ride='carousel'
                            >
                                <CarouselInner className='carousel-inner'>
                                    {testimonialDataSet.map(
                                        (clientData: Json,index:number) => {
                                            return (
                                                <>
                                                    <CarouselItem className={`carousel-item ${index===0?"active":""} `}>
                                                        <CarouselContainer className='carousel-container '>
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
                                                                    alt='sign'
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

                                                            <CarouselSubContainer2 className=' w-100 '>
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
                                    className='carousel-control-prev'
                                    type='button'
                                    data-bs-target='#carouselExampleControls'
                                    data-bs-slide='prev'
                                >
                                    <CarouselPrevIcon
                                        className='shadow material-symbols-outlined'
                                        aria-hidden='true'
                                    >
                                        chevron_left
                                    </CarouselPrevIcon>
                                    <span className='visually-hidden'>
                                        Previous
                                    </span>
                                </CarouselPrev>

                                <CarouselNext
                                    className='carousel-control-next'
                                    type='button'
                                    data-bs-target='#carouselExampleControls'
                                    data-bs-slide='next'
                                >
                                    <CarouselNextIcon
                                        className='shadow material-symbols-outlined'
                                        aria-hidden='true'
                                    >
                                        chevron_right
                                    </CarouselNextIcon>
                                    <span className='visually-hidden'>
                                        Next
                                    </span>
                                </CarouselNext>
                            </Carousel>
                        </Column>
                    </Row>
                </Container>
            </Wrapper>
        </>
    );
}
export default Blog;
