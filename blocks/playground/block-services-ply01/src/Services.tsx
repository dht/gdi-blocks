import React from 'react';
import { Container, H1, Wrapper,  Skill, SkillAncher, GridContainer, GridItem, RederImage } from './Services.style';


export const id = 'com.usegdi.block-services-ply01';

export type ServicesProps = {
    strings: ServicesStrings;
    colors: ServicesColors;
    extra: ServicesExtra;
};

export type ServicesStrings = {
    header: string;
    description?: string;
};

export type ServicesColors = {
};

export type ServicesExtra = {
    serviceDataset: Json;
};

export function Services(props: ServicesProps) {
    const { strings, colors, extra } = props;
    const { header, description } = strings;
    const { serviceDataset} = extra;
  
    return (
            <Wrapper
                className='Service-container'
                data-testid='Service-container'
                extra={colors}
            >
                <Container>
                    <H1>{header}</H1>
                    <Skill>{description}</Skill>
                
              <GridContainer>{renderItems(serviceDataset)}</GridContainer>
              </Container>
            </Wrapper>
    );
}

function renderItems(gridData : Json) {
    return gridData.map((item: Json, index: number) =>  
        <GridItem key={item.id}>
           <RederImage src={item.imageUrl} alt={item.title} />
           <SkillAncher>{item.title}</SkillAncher>
           <Skill>{item.description}</Skill>
        </GridItem>
    );
}
export default Services;
