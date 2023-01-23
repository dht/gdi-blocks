import React, { useContext } from 'react';
import { useDataset } from '@gdi/engine';
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
    Section,
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
    header: string;
    address: string;
    mail: string;
    tel: number;
    description: string;
};

export type FooterColors = {};

export type FooterExtra = {
    menu: [{ name: string; link: string }];
    linksDatasetId?: string;
    menuHeaders: string[];
};

export function Footer(props: FooterProps) {
    const { strings, extra } = props;
    const { header, address, mail, tel, description } = strings;
    const { linksDatasetId = '', menu, menuHeaders } = extra;

    const social = useDataset(linksDatasetId);
    const urls = Object.values(social).map((i: Json) => i.url);

    return (
        <Wrapper className='Footer-wrapper' data-testid='Footer-wrapper'>
            <Container>
                <Row>
                    <Section>
                        <Column>{header}</Column>
                        <p>
                            <Details>{address}</Details>
                            <Details>{mail}</Details>
                            <Details>{tel}</Details>
                        </p>
                    </Section>
                    <Section isSection={true}>
                        <Column>{menuHeaders[0]}</Column>
                        <Ul>
                            {menu.map((item, index) => (
                                <Li>
                                    <Link key={index}>{item.name}</Link>
                                </Li>
                            ))}
                        </Ul>
                    </Section>
                    <Section>
                        <Column>{menuHeaders[1]}</Column>
                        <p>
                            <Ul>
                                <Li>
                                    <SocialIcons grayscale urls={urls} />
                                </Li>
                                <Li>
                                    <Copy className='pt-4'>{description}</Copy>
                                </Li>
                            </Ul>
                        </p>
                    </Section>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default Footer;
