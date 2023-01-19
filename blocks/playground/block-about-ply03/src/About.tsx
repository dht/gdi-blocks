import React, { useContext } from 'react';
import { Wrapper, Body, Container, Button, H1 } from './About.style';

export const id = 'com.usegdi.blocks.about-ply03';

export type AboutProps = {
    strings: AboutStrings;
    colors: AboutColors;
    extra: AboutExtra;
};

export type AboutStrings = {
    descriptionOne?: string;
    descriptionTwo?: string;
    header: string;
    button?: string;
};

export type AboutColors = {};

export type AboutExtra = {
    imageUrl: string;
    socialDatasetId: string;
};

export function About(props: AboutProps) {
    const { strings, extra } = props;
    const { descriptionOne, descriptionTwo, header, button } = strings;

    return (
        <Wrapper
            className='About-container'
            data-testid='About-container'
            extra={extra}
        >
            <Container>
                <H1>{header}</H1>
                <Body>{descriptionOne}</Body>
                <Body>{descriptionTwo}</Body>
                <Button>{button}</Button>
            </Container>
        </Wrapper>
    );
}

export default About;
