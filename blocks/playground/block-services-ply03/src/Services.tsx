import React from 'react';
import {
    Container,
    H1,
    Wrapper,
    Skill,
    SkillAncher,
    GridContainer,
    GridItem,
    ReadIcon,
    Infortmation,
    Image,
    Figure
} from './Services.style';

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

export type ServicesColors = {};

export type ServicesExtra = {
    serviceDataset: Json;
    imageUrl: string;
};

export function Services(props: ServicesProps) {
    const { strings, colors, extra } = props;
    const { header, description } = strings;
    const { imageUrl, serviceDataset } = extra;

    return (
        <Wrapper
            className='Service-container'
            data-testid='Service-container'
            extra={colors}
        >
            <Container>
                <Figure>
                    <Image src={imageUrl} alt={strings.header} />
                </Figure>
                <Infortmation>
                    <H1>{header}</H1>
                    <Skill>{description}</Skill>

                    <GridContainer>{renderItems(serviceDataset)}</GridContainer>
                </Infortmation>
            </Container>
        </Wrapper>
    );
}

function renderItems(gridData: Json) {
    return gridData.map((item: Json, index: number) => (
        <GridItem key={item.id}>
            <ReadIcon>
                <i className='material-icons check'>{item.icon}</i>
                <SkillAncher>{item.title}</SkillAncher>
            </ReadIcon>
        </GridItem>
    ));
}
export default Services;
