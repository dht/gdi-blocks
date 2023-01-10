import React from 'react';
import {
    Header,
    IFrame,
    Item,
    Items,
    Location,
    Next,
    Text,
    Wrapper,
} from './Quotes.style';
import { useWindowSize } from 'react-use';
import { useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.quotes-opur3';

export type QuotesProps = {
    strings: QuotesStrings;
    colors: QuotesColors;
    extra: QuotesExtra;
};

export type QuotesStrings = {};

export type QuotesColors = {};

export type QuotesExtra = {
    reviewsDatasetId: string;
};

export function Quotes(props: QuotesProps) {
    const { width, height } = useWindowSize();
    const { extra } = props;
    const { reviewsDatasetId } = extra;

    const reviewsData = useDataset(reviewsDatasetId ?? '') ?? {};

    function renderItem(item: Json) {
        const { name, age, location, youtubeUrl } = item;

        return (
            <Item key={item.id} className='item'>
                <Header>
                    <Text>
                        {name}, <span>{age}</span>
                    </Text>
                    <Location>{location}</Location>
                </Header>
                <IFrame
                    width={width / 3}
                    height={height / 3}
                    src={youtubeUrl}
                    title='YouTube video player'
                    frameBorder={0}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                ></IFrame>
            </Item>
        );
    }

    function renderItems() {
        return reviewsData
            .filter((_i: any, index: number) => index === 0)
            .map((item: Json) => renderItem(item));
    }

    return (
        <Wrapper className='Quotes-wrapper' data-testid='Quotes-wrapper'>
            <Items>{renderItems()}</Items>

            <Next>
                <i className='material-icons'>chevron_right</i>
            </Next>
        </Wrapper>
    );
}

export default Quotes;
