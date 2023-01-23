import React, { useContext } from 'react';
import { useDataset, SiteContext } from '@gdi/engine';
import { SocialIcons } from '@gdi/web-ui';
import {
    A,
    Column,
    Container,
    Copy,
    Details,
    Li,
    Link,
    Row,
    Ul,
    Wrapper,
} from './Footer.style';
export const id = 'com.usegdi.blocks.footer-ply06';

export type FooterProps = {
    strings: FooterStrings;
    colors: FooterColors;
    extra: FooterExtra;
};

export type FooterStrings = {
    text: string;
    address: string;
    mail: string;
    tel: number;
    description: string;
};

export type FooterColors = {};

export type FooterExtra = {
    menu: [{ name: string; link: string }];
    linksDatasetId?: string;
};

export function Footer(props: FooterProps) {
    const { strings, extra } = props;
    const { text, address, mail, tel, description } = strings;
    const { linksDatasetId = '', menu } = extra;

    const social = useDataset(linksDatasetId);
    const urls = Object.values(social).map((i: Json) => i.url);

    return (
        <Wrapper className='Footer-wrapper' data-testid='Footer-wrapper'>
            <Container>
                <Row>
                    <Column className='pb-4'>
                        <Copy>{text}</Copy>
                    </Column>
                    <Column>
                        <Copy>{'MENU'}</Copy>
                    </Column>
                    <Column>
                        <Copy>{'SOCIALS'}</Copy>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Details>{address}</Details>
                        <Details>{mail}</Details>
                        <Details>{tel}</Details>
                    </Column>
                    <Column>
                        {menu.map((item, index) => (
                            <Link key={index}>{item.name}</Link>
                        ))}
                    </Column>
                    <Column>
                        <Copy>
                            <SocialIcons grayscale urls={urls} />
                        </Copy>
                        <Copy className='pt-4'>{description}</Copy>
                    </Column>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default Footer;
