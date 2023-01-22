import React, { useState, useContext } from 'react';
import {
    Arrow,
    Wrapper,
    ContainerArrows,
    ContainerDots,
    Content,
    Dot,
    Quote,
    QuoteBody,
    QuoteContent,
    QuotePerson,
    QuotePersonJobTitle,
    QuotePersonName,
    H1,
} from './Quotes.style';
import { SiteContext, useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.quotes-ply04';

export type QuotesProps = {
    strings: QuotesStrings;
    colors: QuotesColors;
    extra: QuotesExtra;
};

export type QuotesStrings = {
    header: string;
};

export type QuotesColors = {};

export type QuotesExtra = {
    quotesDatasetId?: string;
};

export function Quotes(props: QuotesProps) {
    const { header } = props.strings;
    const { quotesDatasetId } = props.extra;

    const [activeIndex, setActiveIndex] = useState(0);

    const items = useDataset(quotesDatasetId ?? '');

    const { ga } = useContext(SiteContext);

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

    function renderItem(item: Json, index: number) {
        const { name, jobTitle, company, description } = item;

        const style: React.CSSProperties = {
            transform: `translateX(${(index - activeIndex) * 100}%)`,
        };

        return (
            <Quote style={style} key={item.id}>
                <QuoteContent>
                    <QuoteBody>{description}</QuoteBody>
                </QuoteContent>
                <QuotePerson>
                    <QuotePersonName>{name}</QuotePersonName>
                    <QuotePersonJobTitle>
                        {jobTitle} {company && ', ' + company}
                    </QuotePersonJobTitle>
                </QuotePerson>
            </Quote>
        );
    }

    function renderItems() {
        return items.map((item: Json, index: number) =>
            renderItem(item, index)
        );
    }
    return (
        <Wrapper className='Media-container' data-testid='Media-container'>
            <H1>{header}</H1>
            <Arrows
                items={items}
                activeIndex={activeIndex}
                onChange={onChange}
            />
            <Content>{renderItems()}</Content>
            <Dots items={items} activeIndex={activeIndex} onChange={onChange} />
        </Wrapper>
    );
}

type DotsProps = {
    items: Json[];
    activeIndex: number;
    onChange: (index: number) => void;
};

export function Dots(props: DotsProps) {
    const { items, activeIndex } = props;

    function renderDot(_item: Json, index: number) {
        return (
            <Dot
                key={index}
                className='item'
                onClick={() => props.onChange(index)}
                active={index === activeIndex}
            />
        );
    }

    function renderDots() {
        return items.map((item: Json, index) => renderDot(item, index));
    }

    return <ContainerDots>{renderDots()}</ContainerDots>;
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

export default Quotes;
