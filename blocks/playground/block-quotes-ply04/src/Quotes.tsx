import React from 'react';
import {
    Container,
    H1,
    Wrapper,
    Row,
    SubTitle,
    Column,
    ImageContainer,
} from './Quotes.style';

export const id = 'com.usegdi.blocks.quotes-ply04';

export type QuotesProps = {
    strings: HeroStrings;
    colors: HeroColors;
    extra: QuotesExtra;
};

export type HeroStrings = {
    slogan?: string;
    header: string;
};

export type HeroColors = {};

export type QuotesExtra = {
    imageUrl: string;
};

export function Quotes(props: QuotesProps) {
    const { strings, extra } = props;
    const { slogan, header } = strings;
    const { imageUrl } = extra;

    return (
        <Wrapper>
            <Container>
                <Row>
                    <Column>
                        <H1>{header}</H1>
                        <SubTitle> {slogan}</SubTitle>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <ImageContainer src={imageUrl} />
                    </Column>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default Quotes;
