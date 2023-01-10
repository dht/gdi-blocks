import React from 'react';
import { Bottom, Center, Left, Right, Top, Wrapper } from './PriceTag.style';

export type PriceTagProps = {
    previousPrice?: number;
    currentPrice: number;
    rotation?: number;
    priceNote?: string;
};

export function PriceTag(props: PriceTagProps) {
    const { previousPrice, currentPrice, rotation = 10, priceNote } = props;

    const priceCents = Math.floor(100 * (currentPrice % 1));
    const priceDollars = Math.floor(currentPrice);

    return (
        <Wrapper
            className='PriceTag-wrapper'
            data-testid='PriceTag-wrapper'
            rotation={rotation}
        >
            {previousPrice && <Top>${previousPrice}</Top>}
            <Center>
                <Left>Only{priceNote && '*'}</Left>
                <Right>
                    <i>$</i>
                    {priceDollars}
                    <span>{priceCents}</span>
                </Right>
            </Center>
            {priceNote && <Bottom>* {priceNote}</Bottom>}
        </Wrapper>
    );
}

export default PriceTag;
