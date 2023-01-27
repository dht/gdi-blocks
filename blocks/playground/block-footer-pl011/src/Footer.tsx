import { useDataset } from '@gdi/engine';
import React from 'react';
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
    FooterListHeading,
    FooterEmail,
    SendButton,
    LighterText,
    MenuSection,
    FooterTopRow,
    DividerColumn,
    FooterMainColumn,
    HeadingColumn,
    FooterBottom,
    CopyRightSection,
    FooterSloganSection,
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
    headers: string[];
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
                <ContainerFluid>
                    <Row>
                        <FooterTopRow>
                            <FooterBack>
                                <Row>
                                    <FooterSloganSection >
                                        <FooterText> {FooterQuote}</FooterText>
                                    </FooterSloganSection>
                                    <Column>
                                        <FooterButton>
                                            {buttonText}
                                        </FooterButton>
                                    </Column>
                                </Row>
                            </FooterBack>
                        </FooterTopRow>
                    </Row>
                    <Row>
                        <DividerColumn>
                            <DividerLine></DividerLine>
                        </DividerColumn>
                    </Row>
                    <Row>
                        <FooterMainColumn>
                            <FooterBack>
                                <MenuSection>
                                    <HeadingColumn>
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
                                    </HeadingColumn>

                                    <HeadingColumn>
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
                                    </HeadingColumn>

                                    <HeadingColumn>
                                        <FooterList>
                                            <FooterListHeading>
                                                {headers[2]}
                                            </FooterListHeading>
                                            {contactData.map(
                                                (contact: Json) => {
                                                    return (
                                                        <FooterListItems>
                                                            <FooterIcon>
                                                                {contact.icon}
                                                            </FooterIcon>
                                                            {contact.title}
                                                        </FooterListItems>
                                                    );
                                                }
                                            )}
                                        </FooterList>
                                    </HeadingColumn>

                                    <HeadingColumn>
                                        <FooterList>
                                            <FooterListHeading>
                                                {footerText}
                                            </FooterListHeading>
                                            <FooterListItems>
                                                <FooterEmail
                                                    placeholder={placeholder}
                                                ></FooterEmail>
                                                <SendButton
                                                    className={sendButtonIcon}
                                                ></SendButton>
                                            </FooterListItems>
                                        </FooterList>
                                    </HeadingColumn>
                                </MenuSection>
                            </FooterBack>
                        </FooterMainColumn>
                    </Row>

                    <Row>
                        <DividerColumn>
                            <DividerLine></DividerLine>
                        </DividerColumn>
                    </Row>
                    <Row>
                        <FooterBottom>
                            <FooterBack>
                                <Row>
                                    <CopyRightSection>
                                        <LighterText>{copyRight}</LighterText>
                                    </CopyRightSection>
                                </Row>
                            </FooterBack>
                        </FooterBottom>
                    </Row>
                </ContainerFluid>
            </Wrapper>
        </>
    );
}

export default Footer;
