import React from 'react';
import { ButtonCta } from '@gdi/block-base';
import { H1, P, StreetSignWrapper, Wrapper } from './Cta.style';
import { StreetSign } from './parts/StreetSign/StreetSign';

export const id = 'com.usegdi.blocks.cta-uiey3';

export type CtaProps = {
    strings: CtaStrings;
    colors: CtaColors;
    extra: CtaExtra;
};

export type CtaStrings = {
    header: string;
    paragraph: string;
};

export type CtaColors = {};

export type CtaExtra = {
    number: number;
};

export function Cta(props: CtaProps) {
    const { strings, colors, extra } = props;
    const { header, paragraph } = strings;
    const { number } = extra;

    return (
        <Wrapper className='Cta-wrapper' data-testid='Cta-wrapper'>
            <H1>{header}</H1>
            <P>
                <span>{number}</span> {paragraph}
            </P>

            <ButtonCta />
            <StreetSignWrapper>
                <StreetSign />
            </StreetSignWrapper>
        </Wrapper>
    );
}

export default Cta;
