import { useDataset } from '@gdi/engine';
import React, { useContext } from 'react';
import {
    ContainerFluid,
    Row,
    Column,
    Wrapper,
    FooterBack,
    FooterText,
    FooterButton,
    DividerLine,
    FooterList,
    FooterListItems,
    FooterIcon,
    Address,
    FooterListHeading,
    FooterEmail,
    SendButton,
    LighterText,
} from './Footer.style';

export const id = 'com.usegdi.blocks.footer-pl011';

export type FooterProps = {
    strings: FooterStrings;
    colors: FooterColors;
    extra: FooterExtra;
};

export type FooterStrings = {
    FooterQuote?: string;
    footerText?: string;
    placeholder?: string;
    buttonText?: string;
    copyRight?: string;
    sendButtonIcon: string;
};

export type FooterColors = {};

export type FooterExtra = {
    footerResourcesDatasetId: string;
    footerCompanyDatasetId: string;
    footerContactDatasetId: string;
    headers: Json;
};

export function Footer(props: FooterProps) {
    const { extra, strings } = props;
    const {
        footerResourcesDatasetId,
        footerCompanyDatasetId,
        footerContactDatasetId,
        headers,
    } = extra;
    const {
        FooterQuote,
        footerText,
        placeholder,
        buttonText,
        copyRight,
        sendButtonIcon,
    } = strings;

    const resourceData = useDataset(footerResourcesDatasetId);
    const companyData = useDataset(footerCompanyDatasetId);
    const contactData = useDataset(footerContactDatasetId);

    return (
        <>
            <Wrapper>
                <ContainerFluid className=' p-0 container-fluid'>
                    <Row className='row'>
                        <Column className='col-lg-12'>
                            <FooterBack>
                                <Row className='row'>
                                    <Column className='col-lg-6 padding-left-sm-30px footer-text-center'>
                                        <FooterText> {FooterQuote}</FooterText>
                                    </Column>
                                    <Column className='col-lg-6  text-align-right'>
                                        <FooterButton>
                                            {buttonText}
                                        </FooterButton>
                                    </Column>
                                </Row>
                            </FooterBack>
                        </Column>
                    </Row>
                    <Row className='row'>
                        <Column className='col-lg-12'>
                            <DividerLine></DividerLine>
                        </Column>
                    </Row>
                    <Row className='row'>
                        <Column className='col-lg-12'>
                            <FooterBack>
                                <Row className='row text-light'>
                                    <Column className='col-lg-3'>
                                        <FooterList>
                                            <FooterListHeading>
                                                {headers[0]}
                                            </FooterListHeading>
                                            {resourceData.map(
                                                (resource: Json) => {
                                                    return (
                                                        <FooterListItems>
                                                            {resource.title}
                                                        </FooterListItems>
                                                    );
                                                }
                                            )}
                                        </FooterList>
                                    </Column>

                                    <Column className='col-lg-3'>
                                        <FooterList>
                                            <FooterListHeading>
                                                {headers[1]}
                                            </FooterListHeading>
                                            {companyData.map(
                                                (resource: Json) => {
                                                    return (
                                                        <FooterListItems>
                                                            {resource.title}
                                                        </FooterListItems>
                                                    );
                                                }
                                            )}
                                        </FooterList>
                                    </Column>

                                    <Column className='col-lg-3'>
                                        <FooterList>
                                            <FooterListHeading>
                                                {headers[2]}
                                            </FooterListHeading>
                                            {contactData.map(
                                                (contact: Json) => {
                                                    return (
                                                        <FooterListItems>
                                                            <FooterIcon className='material-symbols-outlined'>
                                                                {contact.icon}
                                                            </FooterIcon>
                                                            {contact.title}
                                                        </FooterListItems>
                                                    );
                                                }
                                            )}
                                        </FooterList>
                                    </Column>

                                    <Column className='col-lg-3'>
                                        <FooterList>
                                            <FooterListHeading>
                                                {footerText}
                                            </FooterListHeading>
                                            <FooterListItems className='listitem'>
                                                <FooterEmail
                                                    placeholder={placeholder}
                                                ></FooterEmail>
                                                <SendButton
                                                    className={sendButtonIcon}
                                                ></SendButton>
                                            </FooterListItems>
                                        </FooterList>
                                    </Column>
                                </Row>
                            </FooterBack>
                        </Column>
                    </Row>

                    <Row className='row'>
                        <Column className='col-lg-12'>
                            <DividerLine></DividerLine>
                        </Column>
                    </Row>
                    <Row className='row'>
                        <Column className='col-lg-12'>
                            <FooterBack>
                                <Row className='row'>
                                    <Column className='col-lg-12 pb-4 text-center'>
                                        <LighterText className='padding-left-sm-30px'>
                                            {copyRight}
                                        </LighterText>
                                    </Column>
                                </Row>
                            </FooterBack>
                        </Column>
                    </Row>
                </ContainerFluid>
            </Wrapper>
        </>
    );
}

export default Footer;
