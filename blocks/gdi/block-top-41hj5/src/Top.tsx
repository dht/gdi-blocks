import React, { useContext } from 'react';
import { Wrapper, Flex, Github, Logo, Svg, Container, Row } from './Top.style';
import { TopMenu, SocialMenu } from '@gdi/block-base';
import { SiteContext, useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.top-41hj5';

export type TopProps = {
    strings: TopStrings;
    colors: TopColors;
    extra: TopExtra;
};

export type TopStrings = {};

export type TopColors = {};

export type TopExtra = {
    logoUrl: string;
    githubUrl?: string;
    socialDatasetId?: string;
};

export function Top(props: TopProps) {
    const { strings, colors, extra } = props;
    const { logoUrl, githubUrl, socialDatasetId = '' } = extra;
    const { menuItems, ga } = useContext(SiteContext);

    const socialLinks = useDataset(socialDatasetId);

    const onClick = (componentName: string) => (item: Json) => {
        ga('navigate', {
            category: 'menu',
            label: componentName,
            destination: item.url,
        });
    };

    function renderGithub() {
        if (!githubUrl) return <></>;

        return (
            <Github href={githubUrl} target='_blank'>
                <img
                    width='28px'
                    height='28px'
                    alt='github'
                    src='https://static-b9ebe.web.app/github.svg'
                />
            </Github>
        );
    }

    return (
        <Wrapper className='Top-wrapper' data-testid='Top-wrapper'>
            <Logo src={logoUrl} alt='logo' />
            <Container>
                <Row>
                    <TopMenu onClick={onClick('TopMenu')} items={menuItems} />
                    <Flex />
                    <SocialMenu
                        onClick={onClick('SocialMenu')}
                        items={socialLinks}
                    />
                    {renderGithub()}
                </Row>
            </Container>
            <Svg
                viewBox='0 0 1200 21'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g stroke='none' fill='none' fillRule='evenodd'>
                    <path
                        d='M0,10.8199991 C173.136426,3.71083303 362.249759,0.15625 567.34,0.15625 C772.430241,0.15625 983.316908,3.71083303 1200,10.8199991 L1200,20.15625 L0,20.15625 L0,10.8199991 Z'
                        id='Rectangle'
                        fill='#FFFFFF'
                    ></path>
                </g>
            </Svg>
        </Wrapper>
    );
}

export default Top;
