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
} from './Services.style';
import { SocialIcons } from '@gdi/web-ui';
import { SiteContext, useDataset } from '@gdi/engine';

export const id = 'com.usegdi.block-services-ply02';

export type ServicesProps = {
    strings: ServicesStrings;
    colors: ServicesColors;
    extra: ServicesExtra;
};

export type ServicesStrings = {};

export type ServicesColors = {};

export type ServicesExtra = {
    servicesDatasetId: string;
};

export function Services(props: ServicesProps) {
    const { strings, colors, extra } = props;
    const { servicesDatasetId } = extra;

    const { ga } = useContext(SiteContext);

    const gridData = useDataset(servicesDatasetId ?? '');

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
            <Skill style={{'color': '#333'}}>{item.title}</Skill>
            <Skill>{item.description}</Skill>
            <SkillAncher>{item.readmore}</SkillAncher>
        </div>
    ));
}
export default Services;
