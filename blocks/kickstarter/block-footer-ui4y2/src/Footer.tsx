import React from 'react';
import { Container, Text, Wrapper } from './Footer.style';

export const id = 'com.usegdi.blocks.footer-ui4y2';

export type FooterProps = {
    strings: FooterStrings;
    colors: FooterColors;
    extra: FooterExtra;
};

export type FooterStrings = {
    text?: string;
};

export type FooterColors = {};

export type FooterExtra = {};

export function Footer(props: FooterProps) {
    const { strings } = props;
    const { text } = strings;

    return (
        <Wrapper className='Footer-wrapper' data-testid='Footer-wrapper'>
            <Container>
                <Text>Copyright © {text}</Text>
            </Container>
        </Wrapper>
    );
}

export default Footer;
