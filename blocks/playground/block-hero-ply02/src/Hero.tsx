import React from 'react';
import {
    H1,
    Wrapper,
    P,
    ClientIcon,
    HeroImg,
    Container,
    Row,
    Column,
    HeroButton,
    Client,
} from './Hero.style';

export const id = 'com.usegdi.blocks.hero-ply02';

export type HeroProps = {
    strings: HeroStrings;
    colors: HeroColors;
    extra: HeroExtra;
};

export type HeroStrings = {
    slogan?: string;
    header: string;
    description?: string;
    buttonText?: string;
};

export type HeroColors = {};

export type HeroExtra = {
    imageUrl: string;
    socialDatasetId: string;
    heroDatasetId: string;
    clientDataSet: Json;
};

export function Hero(props: HeroProps) {
    const { strings, extra } = props;
    const { header, description, buttonText } = strings;
    const { clientDataSet } = extra;

    return (
        <>
            <Wrapper id='Home'>
                <Container className='container'>
                    <Row className='row'>
                        <Column className='col-lg-6 p-40px '>
                            <H1> {header} </H1>
                            <P> {description} </P>
                            <HeroButton> {buttonText} </HeroButton>
                            <ClientIcon className='row mt-5'>
                                {clientDataSet.map((clientImage: Json) => {
                                    return (
                                        <>
                                            <ClientIcon className='col-lg-3 col-3 '>
                                                <Client
                                                    src={clientImage.imgUrl}
                                                />
                                            </ClientIcon>
                                        </>
                                    );
                                })}
                            </ClientIcon>
                        </Column>

                        <Column className='col-lg-6'>
                            <HeroImg extra={extra}></HeroImg>
                        </Column>
                    </Row>
                </Container>
            </Wrapper>
        </>
    );
}

export default Hero;
