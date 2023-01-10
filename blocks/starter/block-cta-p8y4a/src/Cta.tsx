import React, { useContext } from 'react';
import { Button, Container, H3, Row, Wrapper } from './Cta.style';
import { SiteContext } from '@gdi/engine';
import { BkBlur } from '@gdi/block-base';

export const id = 'com.usegdi.templates.starter.ctaAction-basic';

export type CtaProps = {
    strings: CtaStrings;
    colors: CtaColors;
    extra: CtaExtra;
};

export type CtaStrings = {
    slogan?: string;
    ctaButtonText: string;
};

export type CtaColors = {};

export type CtaExtra = {
    href: string;
    imageUrl: string;
};

export function Cta(props: CtaProps) {
    const { strings, colors, extra } = props;
    const { ctaButtonText, slogan } = strings;
    const { href, imageUrl } = extra;
    const { ga } = useContext(SiteContext);

    function onClick() {
        ga('navigate', {
            category: 'ctaAction',
            label: ctaButtonText,
            destination: href,
        });
    }

    return (
        <Wrapper
            className='Cta-container'
            data-testid='Cta-container'
            bk={<BkBlur imageUrl={imageUrl} />}
        >
            <Container>
                <Row>
                    <H3>{slogan}</H3>
                    <Button onClick={onClick} href={href} target='_blank'>
                        {ctaButtonText}
                    </Button>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default Cta;
