import React from 'react';
import {
    Container,
    Wrapper,
    H2,
    Row,
    Column,
    ContactTitle,
    ContactTitleText,
    Input,
    InputContainer,
    ContactTitle3,
    ContactMessage,
    Button,
    GoogleMapContainer,
} from './Contact.style';
import Map from './../../../../packages/block-base/src/components/Maps/Map';
import { useDataset } from '@gdi/engine';
export const id = 'com.usegdi.blocks.contact-ply05';

export type ContactProps = {
    strings: ContactStrings;
    colors: ContactColors;
    extra: ContactExtra;
};

export type ContactStrings = {
    header: string;
    button: string;
    messageTextBox: string;
    // inputBoxFirstRow: [{ title: string; isRequired: boolean }];
    // inputBoxSecondRow: [{ title: string; isRequired: boolean }];
};

export type ContactColors = {};

export type ContactExtra = {
    contactDatasetId?: string;
};

export function Contact(props: ContactProps) {
    const { header, button, messageTextBox } = props.strings;
    const { contactDatasetId } = props.extra;
    const items: Json = useDataset(contactDatasetId ?? '') ?? {};
    console.log(items);

    return (
        <Wrapper className='Contact-container' data-testid='Contact-container'>
            <Container>
                <H2>{header}</H2>
                <Row>
                    {items[0].map(
                        (inputObject: { title: string }, index: number) => (
                            <Column key={index}>
                                <ContactTitle>
                                    <ContactTitleText>
                                        {inputObject.title}
                                    </ContactTitleText>
                                    <InputContainer>
                                        <Input></Input>
                                    </InputContainer>
                                </ContactTitle>
                            </Column>
                        )
                    )}
                </Row>
                <Row>
                    {items[1].map(
                        (
                            inputObject: { title: string; isRequired: boolean },
                            index: number
                        ) => (
                            <Column key={index}>
                                <ContactTitle>
                                    <ContactTitleText>
                                        {inputObject.isRequired
                                            ? inputObject.title + ' *'
                                            : inputObject.title}
                                    </ContactTitleText>
                                    <InputContainer>
                                        <Input
                                            isRequired={inputObject.isRequired}
                                        ></Input>
                                    </InputContainer>
                                </ContactTitle>
                            </Column>
                        )
                    )}
                </Row>
                <Row>
                    <Column>
                        <ContactMessage>
                            <ContactTitleText>
                                {messageTextBox} *
                            </ContactTitleText>
                            <InputContainer>
                                <Input isRequired={true}></Input>
                            </InputContainer>
                        </ContactMessage>
                    </Column>
                    <Column isButton={true}>
                        <ContactTitle3>
                            <Button>{button}</Button>
                        </ContactTitle3>
                    </Column>
                </Row>
            </Container>
            <GoogleMapContainer>
                <Map
                    lat={-34.397}
                    lng={150.644}
                    defaultZoom={14}
                    defaultCenter={{
                        lat: 19.178197,
                        lng: 77.287577,
                    }}
                />
            </GoogleMapContainer>
        </Wrapper>
    );
}

export default Contact;
