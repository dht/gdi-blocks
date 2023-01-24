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
    secondDescription?:string;
};

export type HeroColors = {};

export type HeroExtra = {
    imageUrl: string;
    socialDatasetId: string;
    aboutCardData:Json;
};

export function About(props: AboutProps) {
    const { strings, extra } = props;
    const { header, description, buttonText , secondDescription } = strings;
    const { aboutCardData } = extra;

    return (
        <>
            <Wrapper >
                <FlexContainer id='About'>
                    <Col>
                        {aboutCardData.map((value: Json,index:number) => {
                            return (
                                <>
                                    <AboutCard className={index==3?"mtt-0":"" || index===0?"card1":"" || index===1?"card2":""} >
                                        <CardIcone  className={`material-symbols-outlined ${index===1?"icon2":"" || index===2?"icon4":"" || index===3?"icon3":"" } `} > {value.cardIcon} </CardIcone>
                                        <H2 className='mt-3 h2'>{value.cardTitle}</H2>
                                        <Span> {value.cardDescription} </Span>
                                    </AboutCard>
                                </>
                            );
                        })}
                    </Col>
                    <Col>
                        <H1 className='margin-top' >{header} </H1>
                        <P> {description} </P>
                        <P> {secondDescription} </P>
                        <Button className='mt-3'> {buttonText} </Button>
                    </Col>
                </FlexContainer>
            </Wrapper>
        </>
    );
}

export default About;