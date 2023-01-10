import React from 'react';
import { Logo, MenuIcons, MenuLinks } from '@gdi/block-base';
import { Container, Flex, Row, Wrapper } from './Top.style';

export const id = 'com.usegdi.blocks.top-9yur8';

export type TopProps = {
    strings: TopStrings;
    colors: TopColors;
    extra: TopExtra;
};

export type TopStrings = {};

export type TopColors = {};

export type TopExtra = {};

export function Top(_props: TopProps) {
    return (
        <Wrapper className='Top-wrapper' data-testid='Top-wrapper'>
            <Container>
                <Row>
                    <Logo height={30} />
                    <MenuLinks />
                    <Flex />
                    <MenuIcons />
                </Row>
            </Container>
        </Wrapper>
    );
}

export default Top;
