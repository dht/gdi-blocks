import React from 'react';
import {
    H1,
    Wrapper,
    FlexContainer,
    Col,
    P,
    AboutCard,
    H2,
    Span,
    Button,
    CardIcone,
} from './About.style';

export const id = 'com.usegdi.blocks.about-ply03';

export type AboutProps = {
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
    aboutCardData:Json;
};

export function About(props: AboutProps) {
    const { strings, extra } = props;
    const { header, description, buttonText } = strings;
    const { aboutCardData } = extra;

    return (
        <>
            <Wrapper>
                <FlexContainer>
                    <Col>
                        {aboutCardData.map((value: Json,index:number) => {
                            return (
                                <>
                                    <AboutCard className='mt-5 ml-5 shadow '>
                                        <CardIcone className='material-symbols-outlined ic '> {value.cardIcon} </CardIcone>
                                        <H2 className='mt-3'>{value.cardTitle}</H2>
                                        <Span> {value.cardDescription} </Span>
                                    </AboutCard>
                                </>
                            );
                        })}
                    </Col>
                    <Col>
                        <H1 className='mt-50px'> {header} </H1>
                        <P> {description} </P>
                        <Button className='mt-10'> {buttonText} </Button>
                    </Col>
                </FlexContainer>
            </Wrapper>
        </>
    );
}

export default About;