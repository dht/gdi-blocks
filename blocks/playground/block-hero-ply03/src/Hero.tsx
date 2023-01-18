import React, { useContext } from 'react';
import {
    H1,
    Wrapper,
    FlexContainer,
    Col,
    P,
    ClientIcon,
    HeroImg,
    HeroCard,
    H2,
    Span,
    Button,
} from './Hero.style';
import { SiteContext, useDataset } from '@gdi/engine';


export const id = 'com.usegdi.blocks.hero-ply03';

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
    description2?: string;
};

export type HeroColors = {};

export type HeroExtra = {
    imageUrl: string;
    socialDatasetId: string;
    ply03CardId: string;
};

export function Hero(props: HeroProps) {
    const { strings, extra } = props;
    const { slogan, header, description, buttonText, description2 } = strings;
    const { socialDatasetId, ply03CardId } = extra;

    const { ga } = useContext(SiteContext);

    const ply03Card = useDataset(ply03CardId);

    const onClick = (url: string) => () => {
        ga('navigate', {
            category: 'hero',
            label: url,
        });
    };

    return (
        <>
            <Wrapper>
                <FlexContainer>
                    <Col>
                        {ply03Card.map((value: any) => {
                            return (
                                <>
                                    <HeroCard className='mt-5 ml-5'>
                                        <H2>{value.cardTitle}</H2>
                                        <Span> {value.cardDescription} </Span>
                                    </HeroCard>
                                </>
                            );
                        })}
                    </Col>
                    <Col className=''>
                        <H1 className='mt-50px'> {header} </H1>
                        <P> {description} </P>
                            <br />
                        <P> {description2} </P>

                        <Button className='mt-10'> {buttonText} </Button>
                    </Col>
                </FlexContainer>
            </Wrapper>
        </>
    );
}

export default Hero;
