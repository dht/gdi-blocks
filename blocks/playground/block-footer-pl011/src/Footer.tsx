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
} from './Footer.style';

export const id = 'com.usegdi.blocks.footer-pl011';

export type FooterProps = {
    strings: FooterStrings;
    colors: FooterColors;
    extra: FooterExtra;
};

export type FooterStrings = {
    slogan?: string;
    header?: string;
    placeholder?:string;
    buttonText?:string;
};

export type FooterColors = {};

export type FooterExtra = {
    contactImageUrl:string;
};

export function Footer(props: FooterProps) {
    const { extra , strings  } = props;
    const { contactImageUrl  } = extra;
    const { slogan, header , placeholder , buttonText } = strings;

    return (
        <>
            <Wrapper>
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
export default Footer;
