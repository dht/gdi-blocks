import React, { useContext } from 'react';
import { Column, SiteContext , useDataset } from '@gdi/engine';

import { TopMenu } from '@gdi/block-base';

import {
    Container, Flex, LogoImage, Row, Wrapper 
} from './Topnav.style';

export const id = 'com.usegdi.blocks.topnav-pl012';

export type TopnavProps = {
    strings: TopnavStrings;
    colors: TopnavColors;
    extra: TopnavExtra;
};

export type TopnavStrings = {
    
};

export type TopnavColors = {

    navItemColor:string;
};

export type TopnavExtra = {
    topNavDatasetId:string;
    logoUrl: string;
};

export function Topnav(props: TopnavProps) {
    const { extra , strings ,colors } = props;
    const { topNavDatasetId, logoUrl } = extra;
    const {  } = strings;
    const { navItemColor } = colors;
    const {  ga } = useContext(SiteContext);

    const topNavData = useDataset(topNavDatasetId)

    const onClick = (componentName: string) => (item: Json) => {
        ga('navigate', {
            category: 'menu',
            label: componentName,
            destination: item.url,
        });
    };


    return (
        <>
             <Wrapper
            className='Top-container'
            data-testid='Top-container'
        >
            <Container>
                <Row>
                    <Column><LogoImage src={logoUrl} /></Column>
                    <Flex />
                    <TopMenu color={navItemColor} items={topNavData} onClick={onClick('topMenu')} />
                </Row>
            </Container>
        </Wrapper>
        </>
    );
}
export default Topnav;
