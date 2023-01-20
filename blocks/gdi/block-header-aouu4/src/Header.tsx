import React from 'react';
import { H1, Wrapper } from './Header.style';

export const id = 'com.usegdi.blocks.header-aouu4';

export type HeaderProps = {
    strings: HeaderStrings;
    colors: HeaderColors;
    extra: HeaderExtra;
};

export type HeaderStrings = {
    text: string;
};

export type HeaderColors = {};

export type HeaderExtra = {};

export function Header(props: HeaderProps) {
    const { strings } = props;
    const { text } = strings;

    return (
        <Wrapper className='Header-wrapper' data-testid='Header-wrapper'>
            <H1>{text}</H1>
        </Wrapper>
    );
}

export default Header;
