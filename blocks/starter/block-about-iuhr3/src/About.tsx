import React, { useContext } from 'react';
import {
    Container,
    Actions,
    CTA,
    Details,
    H2,
    P,
    Slogan,
    Wrapper,
    Row,
    Column,
} from './About.style';
import { SiteContext } from '@gdi/engine';
import { BkGradient } from '@gdi/block-base';

export const id = 'com.usegdi.blocks.about-iuhr3';

export type AboutProps = {
    strings: AboutStrings;
    colors: AboutColors;
    extra: AboutExtra;
};

export type AboutStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type AboutColors = {};

export type AboutExtra = {
    href: string;
    imageUrl: string;
};

export function About(props: AboutProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;
    const { ga } = useContext(SiteContext);

    function onClick() {
        ga('navigate', {
            category: 'about',
            label: ctaButtonText,
            destination: href,
        });
    }

    return (
        <Wrapper
            className='About-container'
            data-testid='About-container'
            bk={<BkGradient imageUrl={imageUrl} />}
        >
            <Container>
                <Row>
                    <Column></Column>
                    <Column>
                        <Details>
                            {slogan && (
                                <Slogan colors={colors}>{slogan}</Slogan>
                            )}
                            <H2>{header}</H2>
                            {description && <P>{description}</P>}
                            <Actions>
                                <CTA
                                    onClick={onClick}
                                    colors={colors}
                                    href={href}
                                >
                                    {ctaButtonText}
                                </CTA>
                            </Actions>
                        </Details>
                    </Column>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default About;
