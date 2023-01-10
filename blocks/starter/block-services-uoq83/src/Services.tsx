import React from 'react';
import { Icon } from '@gdi/web-ui';
import { useDataset } from '@gdi/engine';
import {
    Column,
    Container,
    Description,
    H2,
    Row,
    ServiceDescription,
    ServiceIcon,
    ServiceTitle,
    Wrapper,
} from './Services.style';

export const id = 'com.usegdi.blocks.services-uoq83';

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
    servicesDatasetId: string;
};

export function Services(props: ServicesProps) {
    const { strings, extra } = props;
    const { header, description } = strings;
    const { servicesDatasetId } = extra;

    const services = useDataset(servicesDatasetId);

    function renderService(service: Json) {
        const { iconName, title, description } = service;

        return (
            <Column key={service.id} className='service'>
                <ServiceIcon>
                    <Icon iconName={iconName} />
                </ServiceIcon>
                <ServiceTitle>{title}</ServiceTitle>
                <ServiceDescription>{description}</ServiceDescription>
            </Column>
        );
    }

    function renderServices() {
        return services.map((service: Json) => renderService(service));
    }

    return (
        <Wrapper
            className='Services-container'
            data-testid='Services-container'
        >
            <Container>
                <H2>{header}</H2>
                <Description>{description}</Description>
                <Row>{renderServices()}</Row>
            </Container>
        </Wrapper>
    );
}

export default Services;
