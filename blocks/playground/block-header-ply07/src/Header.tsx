import React from 'react';
import { H1, Wrapper } from './Header.style';
import { TopMenu } from '../../../../packages/block-base/src/components/TopMenu/TopMenu';

export const id = 'com.usegdi.blocks.header-ply07';

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
            <TopMenu
                items={[
                    { href: './', title: 'JAMES CONSULTING', isTitle: true },
                    { href: './about', title: 'About' },
                    { href: './projects', title: 'Projects' },
                    { href: './services', title: 'Services' },
                    { href: './plans', title: 'Plans & Pricing' },
                    { href: './tools', title: 'Tools & Tips' },
                    { href: './contact', title: 'Contact' },
                ]}
                onClick={function (item: {
                    href: string;
                    title: string;
                }): void {
                    throw new Error('Function not implemented.');
                }}
                {...{ item: { href: '', title: 'James' } }}
            ></TopMenu>
        </Wrapper>
    );
}

export default Header;
