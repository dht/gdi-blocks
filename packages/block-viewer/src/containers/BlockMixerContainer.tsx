import React, { useMemo } from 'react';
import BlockMixer from '../components/BlockMixer/BlockMixer';
import datasets from '../blocks/blocks.datasets.json';
import { useParams } from 'react-router-dom';
import { useElements } from '../hooks/useElements';

export const BlockMixerContainer = () => {
    const { blockId } = useParams();

    const elements = useElements(blockId ? [blockId] : []);

    const callbacks = useMemo(
        () => ({
            onSelectItem: (instanceId: string) => {},
            onMoveItem: (instanceId: string, newOrderValue: number) => {},
            onAction: (actionType: ActionType, id: string) => {},
        }),
        []
    );

    return (
        <BlockMixer
            datasets={datasets}
            callbacks={callbacks}
            elements={elements}
        />
    );
};

export default BlockMixerContainer;
