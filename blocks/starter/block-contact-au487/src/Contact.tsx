import React, { useContext } from 'react';
import { BkBlur, Whatsapp } from '@gdi/block-base';
import { Container, H3, Wrapper } from './Contact.style';
import { SiteContext } from '@gdi/engine';

export const id = 'com.usegdi.blocks.contact-au487';

export type ContactProps = {
    strings: ContactStrings;
    colors: ContactColors;
    extra: ContactExtra;
};

export type ContactStrings = {
    header: string;
    phoneNumber: string;
};

export type ContactColors = {};

export type ContactExtra = {
    imageUrl: string;
};

export function Contact(props: ContactProps) {
    const { strings, extra } = props;
    const { header, phoneNumber } = strings;
    const { imageUrl } = extra;
    const { ga } = useContext(SiteContext);

    function onClick(_href: string) {
        ga('navigate', {
            category: 'Contact',
            label: 'whatsapp',
        });
    }

    return (
        <Wrapper
            className='Contact-container'
            data-testid='Contact-container'
            bk={<BkBlur imageUrl={imageUrl} />}
        >
            <Container>
                <H3>{header}</H3>
                <Whatsapp phoneNumber={phoneNumber} onClick={onClick} />
            </Container>
        </Wrapper>
    );
}

export default Contact;
