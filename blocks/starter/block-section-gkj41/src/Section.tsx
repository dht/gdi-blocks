import React from 'react';
import { Wrapper, Container, Text } from './Section.style';

export const id = 'com.usegdi.blocks.section-gkj41';

export type SectionProps = {
    sequence?: number;
    strings: SectionStrings;
    colors: SectionColors;
    extra: SectionExtra;
};

export type SectionStrings = {
    text?: string;
};

export type SectionColors = {};

export type SectionExtra = {
    id?: string;
    href?: string;
    isHidden?: boolean;
};

export function Section(props: SectionProps) {
    const { strings, colors, extra } = props;
    const { id, isHidden } = extra;
    const { text } = strings;

    return (
        <Wrapper
            className='Section-wrapper'
            data-testid='Section-wrapper'
            colors={colors}
            hidden={isHidden}
        >
            <Container>
                <Text id={id}>{text}</Text>
            </Container>
        </Wrapper>
    );
}

export default Section;
