import React from 'react';
import {
    H1,
    Wrapper,
    P,
    ClientIcon,
    HeroImg,
    Container,
    Row,
    ClientIconColumn,
    ImageColumn,
    HeroButton,
    ClientImageSection,
    InformationColumn,
} from './Hero.style';

import { useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.hero-ply02';

export type HeroProps = {
    strings: HeroStrings;
    colors: HeroColors;
    extra: HeroExtra;
};

export type HeroStrings = {
    header: string;
    description?: string;
    buttonText?: string;
};

export type HeroColors = {};

export type HeroExtra = {
    imageUrl: string;
    socialDatasetId: string;
    heroDatasetId: string;
    clientLogoDataSetId: string;
};

export function Hero(props: HeroProps) {
    const { strings, extra } = props;
    const { header, description, buttonText } = strings;
    const { clientLogoDataSetId } = extra;
    const clientLogo = useDataset(clientLogoDataSetId);

    return (
        <>
            <Wrapper id='Home'>
                <Container>
                    <Row>
                        <InformationColumn>
                            <H1> {header} </H1>
                            <P> {description} </P>
                            <HeroButton> {buttonText} </HeroButton>
                            <ClientIcon>
                                {clientLogo.map((clientImage: Json) => {
                                    return (
                                            <ClientIconColumn>
                                                <ClientImageSection
                                                    src={clientImage.imgUrl}
                                                />
                                            </ClientIconColumn>
                                    );
                                })}
                            </ClientIcon>
                        </InformationColumn>
                        <ImageColumn>
                            <HeroImg extra={extra}></HeroImg>
                        </ImageColumn>
                    </Row>
                </Container>
            </Wrapper>
        </>
    );
}

export default Hero;
