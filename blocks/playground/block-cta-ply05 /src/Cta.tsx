import { Column } from '@gdi/engine';
import React, { useContext } from 'react';
import { 
    Container, 
    H1, 
    Wrapper,
    Row,
    SubTitle,
    ImageContainer, 

} from './Cta.style';

export const id = 'com.usegdi.blocks.cta-ply05';

export type CtaProps = {
    strings: CtaStrings;
    colors: CtaColors;
    extra: CtaExtra;
};

export type CtaStrings = {
    slogan?: string;
    header: string;
};

export type CtaColors = {};

export type CtaExtra = {
    imageUrl: string;
   
};

export function Cta(props: CtaProps) {
    const { strings, colors, extra } = props;
    const { slogan, header } = strings;
    const { imageUrl } = extra;

    return (
        <Wrapper >
            hello
        </Wrapper>
    );
}

export default Cta;
