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
    footerDataset: Json;
};

export function Footer(props: FooterProps) {
    const { extra, strings } = props;
    const { footerDataset } = extra;
    const {
        FooterQuote,
        footerText,
        placeholder,
        buttonText,
        copyRight,
        sendButtonIcon,
    } = strings;

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
                                    {footerDataset.headings.map(
                                        (heading: any, index: number) => {
                                            return (
                                                <>
                                                    <Column className='col-lg-3 col-md-3'>
                                                        <FooterList>
                                                            <FooterListItems>
                                                                
                                                                <FooterListHeading>
                                                                    {heading}
                                                                </FooterListHeading>
                                                            </FooterListItems>
                                                            {heading ===
                                                                footerDataset
                                                                    .headings[0] &&
                                                                footerDataset.Resources.map(
                                                                    (
                                                                        resources: string[]
                                                                    ) => {
                                                                        return (
                                                                            <>
                                                                                <FooterListItems>
                                                                                    
                                                                                    {
                                                                                        resources
                                                                                    }
                                                                                </FooterListItems>
                                                                            </>
                                                                        );
                                                                    }
                                                                )}

                                                            {heading ===
                                                                footerDataset
                                                                    .headings[1] &&
                                                                footerDataset.Company.map(
                                                                    (
                                                                        company: string[]
                                                                    ) => {
                                                                        return (
                                                                            <>
                                                                                <FooterListItems>
                                                                                    
                                                                                    {
                                                                                        company
                                                                                    }
                                                                                </FooterListItems>
                                                                            </>
                                                                        );
                                                                    }
                                                                )}

                                                            {heading ===
                                                                footerDataset
                                                                    .headings[2] &&
                                                                footerDataset.ContactDetails.data.map(
                                                                    (
                                                                        address: any
                                                                    ) => {
                                                                        return (
                                                                            <>
                                                                                <FooterListItems className='d-flex'>
                                                                                    <FooterIcon className='material-symbols-outlined'>
                                                                                        
                                                                                        {
                                                                                            address.icon
                                                                                        }
                                                                                    </FooterIcon>
                                                                                    <Address>
                                                                                        {
                                                                                            address.data
                                                                                        }
                                                                                    </Address>
                                                                                </FooterListItems>
                                                                            </>
                                                                        );
                                                                    }
                                                                )}
                                                        </FooterList>
                                                    </Column>
                                                </>
                                            );
                                        }
                                    )}

                                    <Column className='col-lg-3 pt-4'>
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
