import { useDataset } from '@gdi/engine';
import React, { useContext } from 'react';
import {
    Container,
    H1,
    H5,
    Wrapper,
    SubTitle,
    VideoImage,
    ProductInfo,
    Icon,
    ProductDescription,
    ModalButton,
    PlayIcon,
    ModalContent,
    ModalHeader,
    ModalDialog,
    ModalBody,
    ModalIframe,
    VideoImageContainer,
    HeaderRow,
    ModalRow,
    VideoColumn,
    ContentRow,
    ModalButtonClosed,
    ProductColumn,
    ProductCard,
} from './Cta.style';

export const id = 'com.usegdi.blocks.cta-ply05';

export type CtaProps = {
    strings: CtaStrings;
    extra: CtaExtra;
};

export type CtaStrings = {
    slogan?: string;
    header: string;
};

export type CtaExtra = {
    imageUrl: string;
    productDatasetId: string;
    youtubeUrl: string;
};

export function Cta(props: CtaProps) {
    const { strings, extra } = props;
    const { slogan, header } = strings;
    const { productDatasetId, youtubeUrl } = extra;

    const productData = useDataset(productDatasetId);

    return (
        <Wrapper>
            <Container>
                <HeaderRow>
                    <H1>{header}</H1>
                    <SubTitle> {slogan}</SubTitle>
                </HeaderRow>

                <ContentRow>
                    <VideoColumn>
                        <VideoImageContainer>
                            <VideoImage extra={extra}>
                                <ModalButton
                                    type='button'
                                    data-bs-toggle='modal'
                                    data-bs-target='#exampleModal'
                                >
                                    <PlayIcon>play_circle</PlayIcon>
                                </ModalButton>

                                <ModalRow
                                    aria-labelledby='exampleModalLabel'
                                    aria-hidden='true'
                                >
                                    <ModalDialog>
                                        <ModalContent>
                                            <ModalHeader>
                                                <ModalButtonClosed
                                                    type='button'
                                                    data-bs-dismiss='modal'
                                                    aria-label='Close'
                                                ></ModalButtonClosed>
                                            </ModalHeader>

                                            <ModalBody>
                                                <ModalIframe
                                                    src={youtubeUrl}
                                                ></ModalIframe>
                                            </ModalBody>
                                        </ModalContent>
                                    </ModalDialog>
                                </ModalRow>
                            </VideoImage>
                        </VideoImageContainer>
                    </VideoColumn>

                    <ProductColumn>
                        <ProductInfo>
                            {productData.map((value: Json, index: number) => {
                                return (
                                    <>
                                        <ProductCard>
                                            <Icon
                                                className={`material-symbols-outlined ${
                                                    index === 1 ? 'icon2' : ''
                                                } `}
                                            >
                                                {value.icon}
                                            </Icon>
                                            <H5>{value.label}</H5>
                                            <ProductDescription>
                                                {value.description}
                                            </ProductDescription>
                                        </ProductCard>
                                    </>
                                );
                            })}
                        </ProductInfo>
                    </ProductColumn>
                </ContentRow>
            </Container>
        </Wrapper>
    );
}
export default Cta;
