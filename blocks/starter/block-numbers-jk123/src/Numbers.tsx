import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import { Icon } from '@gdi/web-ui';
import {
    Container,
    IconWrapper,
    Column,
    Row,
    Title,
    Value,
    Wrapper,
} from './Numbers.style';
import { useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.numbers-jk123';

export type NumbersProps = {
    strings: NumbersStrings;
    colors: NumbersColors;
    extra: NumbersExtra;
};

export type NumbersStrings = {};

export type NumbersColors = {};

export type NumbersExtra = {
    numbersDatasetId: string;
};

export function Numbers(props: NumbersProps) {
    const { strings, colors, extra } = props;
    const { numbersDatasetId } = extra;

    const numbers = useDataset(numbersDatasetId);

    function renderNumber(number: Json) {
        const { iconName, value, title } = number;
        return (
            <Column key={number.id} className='number'>
                <IconWrapper>
                    <Icon iconName={iconName} />
                </IconWrapper>
                <Value>{value}</Value>
                <Title>{title}</Title>
            </Column>
        );
    }

    function renderNumbers() {
        return numbers.map((number: Json) => renderNumber(number));
    }

    return (
        <Wrapper className='Numbers-container' data-testid='Numbers-container'>
            <Container>
                <Row>{renderNumbers()}</Row>
            </Container>
        </Wrapper>
    );
}

export default Numbers;
