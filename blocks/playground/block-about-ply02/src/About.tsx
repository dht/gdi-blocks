import React, { useContext } from 'react';
import { Container, Wrapper, Body, Button, Box, H2 } from './About.style';

export const id = 'com.usegdi.blocks.about-ply02';

export type AboutProps = {
    strings: AboutStrings;
    colors: AboutColors;
    extra: AboutExtra;
};

export type AboutStrings = {
    button: string;
    description?: string;
};

export type AboutColors = {};

export type AboutExtra = {
    imageUrl: string;
    socialDatasetId: string;
    headerParams: [];
};

export function About(props: AboutProps) {
    const { strings, extra } = props;
    const { button, description } = strings;

    return (
        <Wrapper
            className='About-container'
            data-testid='About-container'
            extra={extra}
        >
            <Container>
                {extra.headerParams.map((header) => (
                    <Box>
                        <H2>{header}</H2>
                        <Body>{description}</Body>
                        <Button>{button}</Button>
                    </Box>
                ))}
            </Container>
        </Wrapper>
    );
}

export default About;
