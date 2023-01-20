import React, { useContext } from 'react';
import {
    Container,
    H1,
    Wrapper,
    SkillAncher,
    Skill,
    RenderItem,
    ParentRenderDiv,
    GridContainer,
} from './Services.style';
import { SiteContext } from '@gdi/engine';

export const id = 'com.usegdi.block-services-ply02';

export type ServicesProps = {
    strings: ServicesStrings;
    colors: ServicesColors;
    extra: ServicesExtra;
};

export type ServicesStrings = {};

export type ServicesColors = {};

export type ServicesExtra = {
    servicesDataset: Json;
};

export function Services(props: ServicesProps) {
    const { strings, colors, extra } = props;
    const { servicesDataset } = extra;

    const { ga } = useContext(SiteContext);

    return (
        <Wrapper
            className='Services-container'
            data-testid='Services-container'
            extra={colors}
        >
            <Container>
                <GridContainer>{renderItems(servicesDataset)}</GridContainer>
            </Container>
        </Wrapper>
    );
}

function renderItems(gridData: Json) {
    return gridData.map((item: Json, index: number) => (
        <ParentRenderDiv key={index}>
            <RenderItem>
                <i className='material-icons check'>{item.icon}</i>
            </RenderItem>
            <RenderItem className='pad'>
                <Skill>{item.title}</Skill>
                <Skill className='descr'>{item.description}</Skill>
                <SkillAncher>{item.readmore}  <i className='material-icons'>chevron_right</i></SkillAncher>
            </RenderItem>
        </ParentRenderDiv>
    ));
}
export default Services;
