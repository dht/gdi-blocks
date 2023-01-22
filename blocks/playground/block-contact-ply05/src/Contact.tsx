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
    InputContainer,
    ContactTitle3,
    ContactMessage,
    Button,
} from './Contact.style';
import { useDataset } from '@gdi/engine';
import GoogleMapReact from 'google-map-react';

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
                            <ContactTitleText>First Name</ContactTitleText>
                            <InputContainer>
                                <Input></Input>
                            </InputContainer>
                        </ContactTitle>
                        <Items>{renderItems(educationItems)}</Items>
                    </Column>
                    <Column>
                        <ContactTitle>
                            <ContactTitleText>Last Name</ContactTitleText>
                            <InputContainer>
                                <Input></Input>
                            </InputContainer>
                        </ContactTitle>
                        <Items>{renderItems(experienceItems)}</Items>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <ContactTitle>
                            <ContactTitleText>Email *</ContactTitleText>
                            <InputContainer>
                                <Input isRequired={true}></Input>
                            </InputContainer>
                        </ContactTitle>
                        <Items>{renderItems(educationItems)}</Items>
                    </Column>
                    <Column>
                        <ContactTitle>
                            <ContactTitleText>Subject</ContactTitleText>
                            <InputContainer>
                                <Input></Input>
                            </InputContainer>
                        </ContactTitle>
                        <Items>{renderItems(experienceItems)}</Items>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <ContactMessage>
                            <ContactTitleText>Message *</ContactTitleText>
                            <InputContainer>
                                <Input isRequired={true}></Input>
                            </InputContainer>
                        </ContactMessage>
                        <Items>{renderItems(educationItems)}</Items>
                    </Column>
                    <Column isButton={true}>
                        <ContactTitle3>
                            <Button>Submit</Button>
                        </ContactTitle3>
                        <Items>{renderItems(experienceItems)}</Items>
                    </Column>
                </Row>
            </Container>
            <MapContainer></MapContainer>
            {/* <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: '',
                    }}
                    defaultCenter={{
                        lat: 10.99835602,
                        lng: 77.01502627,
                    }}
                    defaultZoom={11}
                ></GoogleMapReact>
            </div> */}
        </Wrapper>
    );
}

export default Contact;
