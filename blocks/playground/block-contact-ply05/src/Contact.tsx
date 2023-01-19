import React from 'react';
import {
    Container,
    Wrapper,
    H2,
    Row,
    Column,
    ContactTitle,
    ContactTitleText,
    Items,
    Item,
    JobTitle,
    JobCompany,
    Period,
    Year,
    Dash,
    LineRow,
    JobDescription,
    Input,
    MapContainer,
    IconWrapperEmail,
    IconWrapperName,
} from './Contact.style';
import { useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.contact-ply05';

export type ContactProps = {
    strings: ContactStrings;
    colors: ContactColors;
    extra: ContactExtra;
};

export type ContactStrings = {
    header: string;
    description?: string;
};

export type ContactColors = {};

export type ContactExtra = {
    ContactDatasetId?: string;
};

export function Contact(props: ContactProps) {
    const { strings, extra } = props;
    const { header, description } = strings;
    const { ContactDatasetId } = extra;

    const items = useDataset(ContactDatasetId ?? '');

    const educationItems = items.filter((i: Json) => i.type === 'education');
    const experienceItems = items.filter((i: Json) => i.type === 'experience');

    function renderItem(item: Json) {
        const { yearStart, yearEnd, jobTitle, company, description } = item;

        return (
            <Item key={item.id} className='item'>
                <LineRow>
                    <JobCompany>{company}</JobCompany>
                    <Period>
                        <Year>{yearStart}</Year>
                        <Dash>-</Dash>
                        <Year>{yearEnd}</Year>
                    </Period>
                </LineRow>
                <JobTitle>{jobTitle}</JobTitle>
                <JobDescription>{description}</JobDescription>
            </Item>
        );
    }

    function renderItems(items: Json[]) {
        return items.map((item: Json) => renderItem(item));
    }

    return (
        <Wrapper className='Contact-container' data-testid='Contact-container'>
            <Container>
                <H2>{header}</H2>
                <Row>
                    <Column>
                        <ContactTitle>
                            <ContactTitleText>Name</ContactTitleText>
                            <Input></Input>
                            <IconWrapperName>
                                <i className='material-symbols-outlined'>
                                    badge
                                </i>
                            </IconWrapperName>
                        </ContactTitle>
                        <Items>{renderItems(educationItems)}</Items>
                    </Column>
                    <Column>
                        <ContactTitle>
                            <ContactTitleText>Email</ContactTitleText>
                            <Input></Input>
                            <IconWrapperEmail>
                                <i className='material-symbols-outlined'>
                                    mail
                                </i>
                            </IconWrapperEmail>
                        </ContactTitle>
                        <Items>{renderItems(experienceItems)}</Items>
                    </Column>
                </Row>
            </Container>
            <MapContainer></MapContainer>
        </Wrapper>
    );
}

export default Contact;
