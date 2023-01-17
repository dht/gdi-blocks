import React, { useContext } from 'react';
import {
    Container,
    H1,
    Wrapper,
    Greeting,
    SkillAncher,
    Skill,
    Social,
    GridContainer,
} from './Hero.style';
import { SocialIcons } from '@gdi/web-ui';
import { SiteContext, useDataset } from '@gdi/engine';

export const id = 'com.usegdi.block-middle-ply03';

export type HeroProps = {
    strings: HeroStrings;
    colors: HeroColors;
    extra: HeroExtra;
};

export type HeroStrings = {};

export type HeroColors = {};

export type HeroExtra = {
    gridDatasetId: string;
};

export function Hero(props: HeroProps) {
    const { strings, colors, extra } = props;
    const { gridDatasetId } = extra;

    const { ga } = useContext(SiteContext);

    const gridData = useDataset(gridDatasetId ?? '');

    const onClick = (url: string) => () => {
        ga('navigate', {
            category: 'hero',
            label: url,
        });
    };

    return (
        <Wrapper
            className='Hero-container'
            data-testid='Hero-container'
            extra={colors}
        >
            <Container>
                <GridContainer>{renderItems(gridData)}</GridContainer>
            </Container>
        </Wrapper>
    );
}

function renderItems(gridData: Json) {
    return gridData.map((item: Json, index: number) => (
        <div>
             <img src={item.icon} alt="" />
            <Skill style={{    'color': '#333'}}>{item.title}</Skill>
            <Skill>{item.description}</Skill>
            <SkillAncher>{item.readmore}</SkillAncher>
        </div>
    ));
}
export default Hero;
