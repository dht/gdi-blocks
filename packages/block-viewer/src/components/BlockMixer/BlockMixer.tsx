import React from 'react';
import { BlockTabs } from '../Tabs/Tabs';
import { EngineEdit } from '@gdi/engine';
import { Container, Content, Wrapper } from './BlockMixer.style';

export type BlockMixerProps = {
    elements: Json[];
    datasets: Json;
    callbacks: {
        onSelectItem: (instanceId: string) => void;
        onMoveItem: (instanceId: string, newOrderValue: number) => void;
        onAction: (actionType: ActionType, id: string) => void;
    };
};

export function BlockMixer(props: BlockMixerProps) {
    const { elements, callbacks, datasets } = props;

    return (
        <Wrapper
            className='BlockMixer-wrapper'
            data-testid='BlockMixer-wrapper'
        >
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
            <BlockTabs />
        </Wrapper>
    );
}

export default BlockMixer;
