import React, { useContext } from 'react';
import { Container, Wrapper, Body, Button, Box, H2 } from './About.style';
import { useDataset } from '@gdi/engine';
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
    aboutDatasetId: string;
    headerParams: [{ title: string; description: string }];
};

export function About(props: AboutProps) {
    const { strings, extra } = props;
    const { button } = strings;
    const { aboutDatasetId } = extra;
    const items = useDataset(aboutDatasetId ?? '') ?? {};

    function renderItem(item: Json) {
        const { title, description } = item;

        return (
            <Box key={item.id}>
                <H2>{title}</H2>
                <Body>{description}</Body>
                <Button>{button}</Button>
            </Box>
        );
    }

    function renderItems() {
        return items.map((item: Json) => renderItem(item));
    }
    return (
        <Wrapper
            className='About-container'
            data-testid='About-container'
            extra={extra}
        >
            <Container>{renderItems()}</Container>
        </Wrapper>
    );
}

export default About;
