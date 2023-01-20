import React, { useContext } from 'react';
import {
    Container,
    H1,
    H5,
    Wrapper,
    Row,
    SubTitle,
    VideoImage,
    ProductInfo,
    Column,
    Icon,
    ProductDescription,
    iconClass,
    ModalButton,
    PlayIcon,
    ModalContent,
    ModalHeader,
    ModalDialog,
    ModalBody,
    ModalIframe,
} from './Testomonials.style';

export const id = 'com.usegdi.blocks.testimonials-ply06';

export type TestomonialsProps = {
    strings: TestimonialsStrings;
    colors: TestomonialsColors;
    extra: TestomonialsExtra;
};

export type TestimonialsStrings = {
    slogan?: string;
    header: string;
};

export type TestomonialsColors = {};

export type TestomonialsExtra = {
    imageUrl: string;
    productDataset: Json;
    youtubeUrl:string
};

export function Testomonials(props: TestomonialsProps) {
    const { strings, colors, extra } = props;
    const { slogan, header } = strings;
    const { imageUrl, productDataset,youtubeUrl } = extra;

    return (
        <Wrapper>
            <Container>
                <Row className='row'>
                    <Column className='col-lg-12 text-center'>
                        <H1>{header}</H1>
                        <SubTitle> {slogan}</SubTitle>
                    </Column>
                </Row>

                <Row className='row'>
                    <Column className='col-lg-6 mt-4'>
                        <VideoImage extra={extra} >
                            <ModalButton
                                type='button'
                                className=' btn'
                                data-bs-toggle='modal'
                                data-bs-target='#exampleModal'
                            >
                                <PlayIcon className='material-symbols-outlined playbutton '>
                                    play_circle
                                </PlayIcon>
                            </ModalButton>

                            <Row
                                className='modal fade'
                                id='exampleModal'
                                aria-labelledby='exampleModalLabel'
                                aria-hidden='true'
                            >
                                <ModalDialog className='modal-dialog'>
                                    <ModalContent className='modal-content modal-class  '>
                                        <ModalHeader className='modal-header  '>
                                            <ModalButton
                                                type='button'
                                                className='btn-close btn-danger btn '
                                                data-bs-dismiss='modal'
                                                aria-label='Close'
                                            ></ModalButton>
                                        </ModalHeader>

                                        <ModalBody className='modal-body'>
                                            <ModalIframe
                                               className='iframe-class'
                                                src={youtubeUrl}
                                            ></ModalIframe>
                                        </ModalBody>
                                    </ModalContent>
                                </ModalDialog>
                            </Row>
                            
                        </VideoImage>
                    </Column>
                    
                    <Column className='col-lg-6 d-flex'>
                        <ProductInfo>
                            <Row className='row'>
                                {productDataset.map(
                                    (value: Json, index: number) => {
                                        return (
                                            <>
                                                <Column className='col-lg-12 products-card '>
                                                    <Icon className={iconClass}>
                                                        {value.icon}
                                                    </Icon>
                                                    <H5 className='mt-2'>
                                                        {value.label}
                                                    </H5>
                                                    <ProductDescription>
                                                        {value.description}
                                                    </ProductDescription>
                                                </Column>
                                            </>
                                        );
                                    }
                                )}
                            </Row>
                        </ProductInfo>
                    </Column>
                </Row>
            </Container>
        </Wrapper>
    );
}
export default Testomonials;
