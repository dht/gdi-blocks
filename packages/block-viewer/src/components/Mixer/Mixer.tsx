import React from 'react';
import { Container, Content, Wrapper } from './Mixer.style';
import { EngineEdit } from '@gdi/engine';

export type MixerProps = {
    elements: Json[];
    datasets: Json;
    callbacks: {
        onSelectItem: (instanceId: string) => void;
        onMoveItem: (instanceId: string, newOrderValue: number) => void;
        onAction: (actionType: ActionType, id: string) => void;
    };
    children: React.ReactNode;
};

export function Mixer(props: MixerProps) {
    const { elements, callbacks, datasets } = props;

    return (
        <Wrapper className='Mixer-wrapper' data-testid='Mixer-wrapper'>
            <Content>
                <Container>
                    <EngineEdit
                        selectedId={''}
                        onSelectItem={callbacks.onSelectItem}
                        onAction={callbacks.onAction}
                        elements={elements}
                        datasets={datasets}
                    />
                </Container>
            </Content>
            {props.children}
        </Wrapper>
    );
}

export default Mixer;
