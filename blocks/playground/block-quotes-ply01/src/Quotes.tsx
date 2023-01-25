
import React, { useState, useContext } from 'react';
import {
    Arrow,
    Wrapper,
    ContainerArrows,
    Content,
    Quote,
    QuoteBody,
    QuoteContent,
    QuotePerson,
    QuotePersonImage,
    QuotePersonJobTitle,
    QuotePersonName,
} from './Quotes.style';
import { SiteContext, useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.quotes-ply01';

export type QuotesProps = {
    strings: QuotesStrings;
    colors: QuotesColors;
    extra: QuotesExtra;
};

export type QuotesStrings = {};

export type QuotesColors = {};

export type QuotesExtra = {

    aboutDatasetId: string;
};

export function Quotes(props: QuotesProps) {
    const { extra } = props;
    const { aboutDatasetId} = extra;

    const [activeIndex, setActiveIndex] = useState(0);

    const items  = useDataset(aboutDatasetId ?? '') ?? {} ;
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
        const { imageUrl, name, jobTitle, description } = item;

        const style: React.CSSProperties = {
            transform: `translateX(${(index - activeIndex) * 100}%)`,
        };

        return (
            <Quote style={style} key={item.id}>
                <QuotePerson>
                    <QuotePersonImage imageUrl={imageUrl} />
                </QuotePerson>
                <QuoteContent>
                    <QuoteBody>{description}</QuoteBody>
                </QuoteContent>
                <QuotePerson>
                    <QuotePersonName>{name}</QuotePersonName>
                    <QuotePersonJobTitle>
                        {jobTitle}
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
            <Arrows
                items={items}
                activeIndex={activeIndex}
                onChange={onChange}
            />
            <Content>{renderItems()}</Content>
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

export default Quotes;
