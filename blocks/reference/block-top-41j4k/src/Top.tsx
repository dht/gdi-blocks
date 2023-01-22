import React, { useContext } from 'react';
import { Wrapper, Container, Row, Header, Column } from './Top.style';
import { TopMenu } from '@gdi/block-base';
import { SiteContext } from '@gdi/engine';

export const id = 'com.usegdi.blocks.top-41j4k';

export type TopProps = {
    strings: TopStrings;
    colors: TopColors;
    extra: TopExtra;
};

export type TopStrings = {
    header: string;
};

export type TopColors = {};

export type TopExtra = {};

export function Top(props: TopProps) {
    const { strings } = props;
    const { header } = strings;
    const { menuItems, ga } = useContext(SiteContext);
    console.log(menuItems);

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
                        <Header>{header}</Header>
                    </Column>
                    <Column>
                        <TopMenu
                            color='white'
                            onClick={onClick('TopMenu')}
                            items={menuItems}
                        />
                    </Column>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default Top;
