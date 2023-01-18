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
    Br,
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
            <Wrapper>
                    <Container>
                        <Row>
                        <Column>
                        <H1 className='pt-10'> {header} </H1>
                        <P> {description} </P>
                        <HeroButton> {buttonText} </HeroButton>
                        <Br></Br>
                        {clientDataSet.map((clientimage: Json) => {
                            return (
                                <>
                                    <ClientIcon>
                                        <Client src={clientimage.imgUrl} />
                                    </ClientIcon>
                                </>
                            );
                        })}
                        </Column>
                        <Column>
                            <HeroImg extra={extra}></HeroImg>
                        </Column>
                        </Row>
                    </Container>
             </Wrapper>
        </>
    );
}

export default Hero;
