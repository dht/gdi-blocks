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
    headerParams: [{ title: string; description: string }];
};

export function About(props: AboutProps) {
    const { strings, extra } = props;
    const { button } = strings;

    return (
        <Wrapper
            className='About-container'
            data-testid='About-container'
            extra={extra}
        >
            <Container>
                {extra.headerParams.map((header, index) => (
                    <Box key={index}>
                        <H2>{header.title}</H2>
                        <Body>{header.description}</Body>
                        <Button>{button}</Button>
                    </Box>
                ))}
            </Container>
        </Wrapper>
    );
}

export default About;
