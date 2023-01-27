import { useDataset } from '@gdi/engine';
import React from 'react';
import {
    H1,
    Wrapper,
    FlexContainer,
    Col,
    P,
    AboutCard,
    H4,
    Span,
    Button,
    CardIcon
} from './About.style';

export const id = 'com.usegdi.blocks.about-ply03';

export type AboutProps = {
    strings: HeroStrings;
    colors: HeroColors;
    extra: HeroExtra;
};

export type HeroStrings = {
    header: string;
    description?: string;
    buttonText?: string;
    secondDescription?:string;
};

export type HeroColors = {};

export type HeroExtra = {
    imageUrl: string;
    aboutCardId:string;
};

export function About(props: AboutProps) {
    const { strings, extra } = props;
    const { header, description, buttonText , secondDescription } = strings;
    const { aboutCardId } = extra;

    const aboutCardData = useDataset(aboutCardId)

    return (
        <>
            <Wrapper >
                <FlexContainer>
                    <Col>
                        {aboutCardData.map((value: Json,index:number) => {
                            return (
                                    <AboutCard  >
                                        <CardIcon  className={`material-symbols-outlined ${index===1?"icon2":"" || index===2?"icon4":"" || index===3?"icon3":"" } `} > {value.cardIcon} </CardIcon>
                                        <H4>{value.cardTitle}</H4>
                                        <Span> {value.cardDescription} </Span>
                                    </AboutCard>

                            );
                        })}
                    </Col>
                    <Col>
                        <H1>{header} </H1>
                        <P> {description} </P>
                        <P> {secondDescription} </P>
                        <Button> {buttonText} </Button>
                    </Col>
                </FlexContainer>
            </Wrapper>
        </>
    );
}

export default About;