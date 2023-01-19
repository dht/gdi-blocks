import React from 'react';
import { Container, Text, Wrapper,Image } from './Footer.style';

export const id = 'com.usegdi.blocks.footer-ply01';

export type FooterProps = {
    strings: FooterStrings;
    colors: FooterColors;
    extra: FooterExtra;
};

export type FooterStrings = {
    text?: string;
};

export type FooterColors = {};

export type FooterExtra = {
    imageUrl?: string;
};

export function Footer(props: FooterProps) {
    const { strings , extra} = props;
    const { text } = strings;
    const { imageUrl } = extra;

    return (
        <Wrapper className='Footer-wrapper' data-testid='Footer-wrapper'>
            <Container>
            <Image src={imageUrl} />
                <Text> © {text} Privacy Policy</Text>
            </Container>
        </Wrapper>
    );
}

export default Footer;
