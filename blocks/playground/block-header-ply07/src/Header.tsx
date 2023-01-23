import React, {useContext} from 'react';
import { Wrapper , Row , Column , Title ,Container, MobileContainer} from './Header.style';
import { TopMenu } from '../../../../packages/block-base/src/components/TopMenu/TopMenu';
import {MobileTopMenu} from './parts/mobile-navbar'
import { ITopMenuItem, SiteContext } from '@gdi/engine';
export const id = 'com.usegdi.blocks.header-ply07';

export type HeaderProps = {
    strings: HeaderStrings;
    colors: HeaderColors;
    extra: HeaderExtra;
};

export type HeaderStrings = {
    header: string;
};

export type HeaderColors = {};

export type HeaderExtra = {};


function row(
    header: string,
    onClick: (componentName: string) => (item: Json) => void,
    menuItems: ITopMenuItem[]
) {
    return (
        <Row>
            <Column>
                <Title>{header}</Title>
            </Column>
            <Column>
            {window.innerWidth <= 500 ? (
               <MobileTopMenu
               color='#222'
               onClick={onClick('TopMenu')}
               items={menuItems} />
            ) : (
                <TopMenu
                color='#222'
                onClick={onClick('TopMenu')}
                items={menuItems}
            />
            )}
                
            </Column>
        </Row>
    );
}

export function Header(props: HeaderProps) {
    const { strings } = props;
    const { header } = strings;
    const { menuItems, ga } = useContext(SiteContext);

    console.log('menuItems ::', menuItems)
    // return (
    //     <Wrapper className='Header-wrapper' data-testid='Header-wrapper'>
    //         <TopMenu
    //             items={[
    //                 { href: './', title: 'wegy', isTitle: true, isFlex: true },
    //                 { href: './Home', title: 'Home', isTitle: true },
    //                 { href: './about', title: 'About', isTitle: true },
    //                 { href: './Blog', title: 'Blog', isTitle: true },
    //                 { href: './contact', title: 'Contacts', isTitle: true },
    //             ]}
    //             onClick={function (item: {
    //                 href: string;
    //                 title: string;
    //             }): void {
    //                 throw new Error('Function not implemented.');
    //             }}
    //             colorsFont={{
    //                 isColor: true,
    //                 backgroundColor: '#fff',
    //                 textColor: '#222',
    //                 fontFamily: `'Ubuntu',sans-serif`,
    //                 fontSize: '15',
    //             }}
    //             mobileMenu={{
    //                 isPostionChanged: true,
    //                 position: 'fixed',
    //                 zIndex: 999,
    //                 float: 'left',
    //                 backgroundColor: '#fff',
    //                 fontFamily: `'Ubuntu',sans-serif`,
    //                 color: '#1d9d73',
    //                 fontSize: '14',
    //             }}
    //             {...{ item: { href: '', title: 'wegy' } }}
    //         ></TopMenu>
    //     </Wrapper>
    // );

    const onClick = (componentName: string) => (item: Json) => {
        ga('navigate', {
            category: 'menu',
            label: componentName,
            destination: item.url,
        });
    };

    return (
        <Wrapper className='Header-wrapper' data-testid='Header-wrapper'>
            {window.innerWidth <= 768 ? (
                <MobileContainer>
                    {row(header, onClick, menuItems)}
                </MobileContainer>
            ) : (
                <Container>{row(header, onClick, menuItems)}</Container>
            )}
        </Wrapper>
    );
}

export default Header;
