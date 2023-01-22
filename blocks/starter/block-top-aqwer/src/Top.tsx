import React, { useContext } from 'react';
import { Container, Flex, Row, Wrapper } from './Top.style';
import { SiteContext } from '@gdi/engine';
import { TopMenu, Logo } from '@gdi/block-base';

export const id = 'com.usegdi.blocks.top-aqwer';

export type TopProps = {
    strings: TopStrings;
    colors: TopColors;
    extra: TopExtra;
};

export type TopStrings = {};

export type TopColors = {};

export type TopExtra = {
    logoUrl: string;
};

export function Top(props: TopProps) {
    const { extra } = props;
    const { logoUrl } = extra;
    const { menuItems, ga } = useContext(SiteContext);

    console.log(menuItems)

    const onClick = (componentName: string) => (item: Json) => {
        ga('navigate', {
            category: 'menu',
            label: componentName,
            destination: item.url,
        });
    };

    return (
        <Wrapper
            className='Top-container'
            data-testid='Top-container'
        >
            <Container>
                <Row>
                    <Logo url={logoUrl} />
                    <Flex />
                    <TopMenu items={menuItems} onClick={onClick('topMenu')} />
                </Row>
            </Container>
        </Wrapper>
    );
}

export default Top;
