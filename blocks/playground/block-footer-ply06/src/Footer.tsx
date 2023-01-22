import React, { useContext } from 'react';
import { useDataset } from '@gdi/engine';
import { SocialIcons } from '@gdi/web-ui';
import {
    Column,
    Container,
    Copy,
    Details,
    Li,
    Link,
    Paragraph,
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
    footerMenuDatasetId?: string;
    linksDatasetId?: string;
    menuHeaders: string[];
};

export function Footer(props: FooterProps) {
    const { header, address, mail, tel, description } = props.strings;
    const {
        linksDatasetId = '',
        footerMenuDatasetId = '',
        menuHeaders,
    } = props.extra;

    const social = useDataset(linksDatasetId);
    const items = useDataset(footerMenuDatasetId);
    const urls = Object.values(social).map((i: Json) => i.url);

    return (
        <Wrapper className='Footer-wrapper' data-testid='Footer-wrapper'>
            <Container>
                <Row>
                    <Section>
                        <Column>{header}</Column>
                        <Paragraph>
                            <Details>{address}</Details>
                            <Details>{mail}</Details>
                            <Details>{tel}</Details>
                        </Paragraph>
                    </Section>
                    <Section isSection={true}>
                        <Column>{menuHeaders[0]}</Column>
                        <Ul>
                            {items.map(
                                (
                                    item: { name: string; link: string },
                                    index: number
                                ) => menuItem(index, item)
                            )}
                        </Ul>
                    </Section>
                    <Section>
                        <Column>{menuHeaders[1]}</Column>
                        <Paragraph>
                            <Ul>
                                <Li>
                                    <SocialIcons grayscale urls={urls} />
                                </Li>
                                <Li>
                                    <Copy className='pt-4'>{description}</Copy>
                                </Li>
                            </Ul>
                        </Paragraph>
                    </Section>
                </Row>
            </Container>
        </Wrapper>
    );

    function menuItem(
        index: number,
        item: { name: string; link: string }
    ): JSX.Element {
        return (
            <Li key={index}>
                <Link>{item.name}</Link>
            </Li>
        );
    }
}

export default Footer;
