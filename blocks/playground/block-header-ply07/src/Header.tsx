import React, { useContext } from 'react';
import { Wrapper, Container, Row, Title, Column } from './Header.style';
import { TopMenu } from '../../../../packages/block-base/src/components/TopMenu/TopMenu';
import { SiteContext } from '@gdi/engine';

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

export type HeaderExtra = {
    items: [];
};

export function Header(props: HeaderProps) {
    const { strings } = props;
    const { header } = strings;
    const { items } = props.extra;
    const { ga } = useContext(SiteContext);

    const onClick = (componentName: string) => (item: Json) => {
        ga('navigate', {
            category: 'menu',
            label: componentName,
            destination: item.url,
        });
    };
    return (
        <Wrapper className='Top-wrapper' data-testid='Top-wrapper'>
            <Container>
                <Row>
                    <Column>
                        <Title>{header}</Title>
                    </Column>
                    <Column>
                        <TopMenu
                            color='white'
                            onClick={onClick('TopMenu')}
                            items={items}
                        />
                    </Column>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default Header;
