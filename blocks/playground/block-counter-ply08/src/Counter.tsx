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
    CardCounter,
    CardTitle
} from './Counter.style';


import { Column } from '@gdi/engine';

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
    counterDataset: Json;
};

export function Apps(props: CounterProps) {
    const { strings, extra } = props;
    const { slogan, header } = strings;
    const { counterDataset } = extra;

    return (
        <>
            <Wrapper>

                <Container>

                    <Row>
                        <Column className='text-center'>
                            <H1>{header}</H1>
                            <SubTitle> {slogan} </SubTitle>
                        </Column>
                    </Row>
                    <Row>
                        {counterDataset.map((counterData:Json)=>{
                            return(
                                <>
                                 <Column>
                            <Card className='card'>
                                <CardBody className='card-body'>
                                <Icon className="material-symbols-outlined">
                                {counterData.icon}
                                </Icon>
                                <CardCounter> {counterData.count} </CardCounter>
                                <CardTitle> {counterData.title} </CardTitle>
                                </CardBody>
                            </Card>
                        </Column>
                                </>
                            )
                        })}
                    </Row>
                </Container>
            </Wrapper>
        </>
    );
}
export default Apps;
