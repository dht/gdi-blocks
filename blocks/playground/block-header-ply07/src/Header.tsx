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
                    { href: './', title: 'wegy', isTitle: true, isFlex: true },
                    { href: './Home', title: 'Home', isTitle: true },
                    { href: './about', title: 'About', isTitle: true },
                    { href: './Blog', title: 'Blog', isTitle: true },
                    { href: './contact', title: 'Contacts', isTitle: true },
                ]}
                onClick={function (item: {
                    href: string;
                    title: string;
                }): void {
                    throw new Error('Function not implemented.');
                }}
                colorsFont={{
                    isColor: true,
                    backgroundColor: '#fff',
                    textColor: '#222',
                    fontFamily: `'Ubuntu',sans-serif`,
                    fontSize: '15',
                }}
                mobileMenu={{
                    isPostionChanged: true,
                    position: 'fixed',
                    zIndex: 999,
                    float: 'left',
                    backgroundColor: '#fff',
                    fontFamily: `'Ubuntu',sans-serif`,
                    color: '#1d9d73',
                    fontSize: '14',
                }}
                {...{ item: { href: '', title: 'wegy' } }}
            ></TopMenu>
        </Wrapper>
    );
}

export default Header;
