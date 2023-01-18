import React, { useContext , useState} from 'react';
import { Container, H1, Wrapper,   Arrow, ContainerArrows} from './Hero.style';
import { SocialIcons } from '@gdi/web-ui';
import { SiteContext, useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.hero-ply04';

export type HeroProps = {
    strings: HeroStrings;
    colors: HeroColors;
    extra: HeroExtra;
};

export type HeroStrings = {
    slogan?: string;
    header: string;
    description?: string;
};

export type HeroColors = {};

export type HeroExtra = {
    imageUrl: string;
    socialDatasetId: string;
};

export function Hero(props: HeroProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description } = strings;
    const [activeIndex, setActiveIndex] = useState(0);
    const { socialDatasetId } = extra;
    console.log(props);
    const { ga } = useContext(SiteContext);

    const social = useDataset(socialDatasetId);
    const urls = Object.values(social).map((i: Json) => i.url);

   
    function onChange(index: number) {
        setActiveIndex(index);

        const item = items[index];
        const { quoteId = '' } = item ?? {};

        ga('component', {
            category: 'quotes',
            label: 'quoteChange',
            quoteId,
        });
    }

  

    return (
            <Wrapper
                className='Hero-container'
                data-testid='Hero-container'
                extra={extra}
            >
                 {/* <Arrows
                items={items}
                activeIndex={activeIndex}
                onChange={onChange}
            /> */}
                <Container>
                    <H1>{header}</H1>
                </Container>
            </Wrapper>
    );
}

type ArrowsProps = {
    items: Json[];
    activeIndex: number;
    onChange: (index: number) => void;
};

export function Arrows(props: ArrowsProps) {
    const { items, activeIndex } = props;

    function onRight() {
        const nextIndex = activeIndex + 1;
        const next = nextIndex < items.length ? nextIndex : 0;
        props.onChange(next);
    }

    function onLeft() {
        const nextIndex = activeIndex - 1;
        const next = nextIndex >= 0 ? nextIndex : items.length - 1;
        props.onChange(next);
    }

    return (
        <ContainerArrows>
            <Arrow onClick={onLeft}>
                <i className='material-icons'>keyboard_arrow_left</i>
            </Arrow>
            <Arrow onClick={onRight}>
                <i className='material-icons'>keyboard_arrow_right</i>
            </Arrow>
        </ContainerArrows>
    );
}
export default Hero;
