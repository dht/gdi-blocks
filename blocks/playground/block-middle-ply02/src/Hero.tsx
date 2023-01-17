import React, { useContext } from 'react';
import { Container, H1, Wrapper,  Skill, SkillAncher, GridContainer, GridItem } from './Hero.style';
import { SocialIcons } from '@gdi/web-ui';
import { SiteContext, useDataset } from '@gdi/engine';

export const id = 'com.usegdi.block-middle-ply02';

export type HeroProps = {
    strings: HeroStrings;
    colors: HeroColors;
    extra: HeroExtra;
};

export type HeroStrings = {
    slogan?: string;
    header: string;
    description?: string;
};

export type HeroColors = {
    backgroundColor:string;
};

export type HeroExtra = {
    imageUrl: string;
    gridDatasetId: string;
};

export function Hero(props: HeroProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description } = strings;
    const { gridDatasetId } = extra;
    console.log(props);
    const { ga } = useContext(SiteContext);

    const gridData = useDataset(gridDatasetId ?? '') ;
   

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
                    <H1>{header}</H1>
                    <Skill>{description}</Skill>
                
              <GridContainer>{renderItems(gridData)}</GridContainer>
              </Container>
            </Wrapper>
    );
}

function renderItems(gridData : Json) {
    return gridData.map((item: Json, index: number) =>  
        <GridItem key={index}>
           <img src={item.imageUrl} alt={item.title} />
           <SkillAncher>{item.title}</SkillAncher>
           <Skill>{item.description}</Skill>
        </GridItem>
    );
}
export default Hero;
