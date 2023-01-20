import { Column } from '@gdi/engine';
import React, { useContext } from 'react';
import { 
    Container, 
    H1, 
    Wrapper,
    Row,
    SubTitle,
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
        <Wrapper >
            <Container>
                <Row className='row'><Column className="col-lg-12 text-center"><H1>{header}</H1><SubTitle> {slogan}</SubTitle></Column></Row>
                <Row><Column className='col-lg-12' ><ImageContainer src={imageUrl} className="shadow" /></Column></Row>
            </Container>
        </Wrapper>
    );
}

export default Quotes;
