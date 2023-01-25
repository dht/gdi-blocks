import React, { useContext } from 'react';
import {
    ContainerFluid,
    Header,
    Row,
    SubHeader,
    Wrapper,
    ContactBack,
    ContactImage,
    EmailBox,
    SubmitButton,
    Container,
    ColumnContainer,
    ColumnContainer2,
} from './Contact.style';

export const id = 'com.usegdi.blocks.contact-pl10';

export type ContactProps = {
    strings: ContactStrings;
    colors: ContactColors;
    extra: ContactExtra;
};

export type ContactStrings = {
    slogan?: string;
    header?: string;
    placeholder?: string;
    buttonText?: string;
};

export type ContactColors = {};

export type ContactExtra = {
    contactImage: string;
};

export function Contact(props: ContactProps) {
    const { extra, strings } = props;
    const { contactImage } = extra;
    const { slogan, header, placeholder, buttonText } = strings;
    console.log(slogan)

    return (
        <>
            <Wrapper id='Contact'>
                <ContainerFluid>
                    <Row>
                        <Container>
                            <ContactBack>
                                <Row>
                                    <ColumnContainer>
                                        <ContactImage src={contactImage} />
                                    </ColumnContainer>
                                    <ColumnContainer2>
                                        <Header> {header} </Header>
                                        <SubHeader> {slogan} </SubHeader>
                                        <EmailBox placeholder={placeholder} />
                                        <SubmitButton>
                                            {buttonText}
                                        </SubmitButton>
                                    </ColumnContainer2>
                                </Row>
                            </ContactBack>
                        </Container>
                    </Row>
                </ContainerFluid>
            </Wrapper>
        </>
    );
}
export default Contact;
