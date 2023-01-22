import React, { useContext } from 'react';
import { Column, SiteContext } from '@gdi/engine';

import { TopMenu, Logo } from '@gdi/block-base';

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
    topNavDataset:string[];
    logoUrl: string;
};

export function Topnav(props: TopnavProps) {
    const { extra , strings ,colors } = props;
    const { topNavDataset, logoUrl } = extra;
    const {  } = strings;
    const { navItemColor } = colors;
    const {  ga } = useContext(SiteContext);

    console.log(topNavDataset)
   

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
                    <Column className='p-4'> <LogoImage src={logoUrl} alt="logo" /> </Column>
                    <Flex />
                    <TopMenu color={navItemColor} items={topNavDataset} onClick={onClick('topMenu')} />
                </Row>
            </Container>
        </Wrapper>
        </>
    );
}
export default Topnav;
