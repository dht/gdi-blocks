import React, { useContext } from 'react';
import {
    Container,
    Wrapper,
    SubTitle,
    Row,
    H1,
    Card,
    CardBody,
    Icon,
    CounterCard,
    CardTitle,
    HeadingColumn,
    CardContainer,
    Column
} from './Counter.style';

import {  useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.counter-ply08';

export type CounterProps = {
    strings: CounterStrings;
    colors: CounterColors;
    extra: CounterExtra;
};

export type CounterStrings = {
    slogan?: string;
    header?: string;
};

export type CounterColors = {};

export type CounterExtra = {
    counterDatasetId: string;
};

export function Apps(props: CounterProps) {
    const { strings, extra } = props;
    const { slogan, header } = strings;
    const { counterDatasetId } = extra;

    const counters = useDataset(counterDatasetId);

    return (
        <>
            <Wrapper>
                <Container>
                    <Row>
                        <HeadingColumn>
                            <H1>{header}</H1>
                            <SubTitle> {slogan} </SubTitle>
                        </HeadingColumn>
                    </Row>
                    <Row>
                        {counters.map((counterData: Json) => {
                            return (
                                    <Column>
                                    <CardContainer>
                                        <Card>
                                            <CardBody>
                                                <Icon>{counterData.icon}</Icon>
                                                <CounterCard>
                                                    {counterData.count}
                                                </CounterCard>
                                                <CardTitle>
                                                    {counterData.title}
                                                </CardTitle>
                                            </CardBody>
                                        </Card>
                                    </CardContainer>
                                    </Column>
                            );
                        })}
                    </Row>
                </Container>
            </Wrapper>
        </>
    );
}
export default Apps;
