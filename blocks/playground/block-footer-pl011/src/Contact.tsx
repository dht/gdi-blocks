import React, { useContext } from 'react';
import {
    ContainerFluid,
    Header,
    Row,
    Column,
    SubHeader,
    Wrapper,
    ContactBack,
    ContactImage,
    EmailBox,
    SubmitButton, 
} from './Contact.style';

export const id = 'com.usegdi.blocks.footer-pl011';

export type ContactProps = {
    strings: ContactStrings;
    colors: ContactColors;
    extra: ContactExtra;
};

export type ContactStrings = {
    slogan?: string;
    header?: string;
    placeholder?:string;
    buttonText?:string;
};

export type ContactColors = {};

export type ContactExtra = {
    contactImageUrl:string;
};

export function Contact(props: ContactProps) {
    const { extra , strings  } = props;
    const { contactImageUrl  } = extra;
    const { slogan, header , placeholder , buttonText } = strings;

    return (
        <>
            <Wrapper id='contact' >
                <ContainerFluid className=' p-0 container-fluid' >
                        <Row className='row'>
                            <Column className='col-lg-12'>
                                <ContactBack>
                                    <Row className="row">
                                        <Column className="col-lg-6 text-center ">
                                            <ContactImage src={contactImageUrl} alt="" />
                                        </Column>
                                        <Column className="col-lg-6">
                                           <Header> {header} </Header>
                                           <SubHeader> {slogan} </SubHeader>
                                            <EmailBox type="text" placeholder={placeholder} />
                                            <SubmitButton> {buttonText} </SubmitButton>
                                        </Column>
                                    </Row>
                                </ContactBack>
                            </Column>
                        </Row>
                </ContainerFluid>
          </Wrapper>
        </>
    );
}
export default Contact;
