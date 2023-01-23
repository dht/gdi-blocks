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
import GoogleMapReact from 'google-map-react';

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
    inputBoxFirstRow: [{ title: string; isRequired: boolean }];
    inputBoxSecondRow: [{ title: string; isRequired: boolean }];
};

export type ContactColors = {};

export type ContactExtra = {
    ContactDatasetId?: string;
};

export function Contact(props: ContactProps) {
    const {
        header,
        inputBoxFirstRow,
        inputBoxSecondRow,
        button,
        messageTextBox,
    } = props.strings;

    const Marker = (props: any) => {
        return <div className='SuperAwesomePin'>{props.text}</div>;
    };

    return (
        <Wrapper className='Contact-container' data-testid='Contact-container'>
            <Container>
                <H2>{header}</H2>
                <Row>
                    {inputBoxFirstRow.map((inputObject, index) => (
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
                    ))}
                </Row>
                <Row>
                    {inputBoxSecondRow.map((inputObject, index) => (
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
                    ))}
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
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: '',
                    }}
                    defaultCenter={{
                        lat: 19.178197,
                        lng: 77.287577,
                    }}
                    defaultZoom={14}
                >
                    <Marker lat={-34.397} lng={150.644} text='My Location' />
                </GoogleMapReact>
            </GoogleMapContainer>
        </Wrapper>
    );
}

export default Contact;
