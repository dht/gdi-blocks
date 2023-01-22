import React, { useContext } from 'react';
import {
    Wrapper,
    Container,
    Row,
    Title,
    Column,
    MobileContainer,
} from './Header.style';
import { TopMenu } from '../../../../packages/block-base/src/components/TopMenu/TopMenu';
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
                <TopMenu
                    color='white'
                    onClick={onClick('TopMenu')}
                    items={menuItems}
                />
            </Column>
        </Row>
    );
}

export function Header(props: HeaderProps) {
    const { strings } = props;
    const { header } = strings;
    const { menuItems, ga } = useContext(SiteContext);

    const onClick = (componentName: string) => (item: Json) => {
        ga('navigate', {
            category: 'menu',
            label: componentName,
            destination: item.url,
        });
    };
    return (
        <Wrapper className='Top-wrapper' data-testid='Top-wrapper'>
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
