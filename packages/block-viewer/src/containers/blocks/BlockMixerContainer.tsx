import React, { useMemo } from 'react';
import Mixer from '../../components/Mixer/Mixer';
import { BlockTabs } from '../../components/Tabs/Tabs';
import { actions, selectors } from '../../store';
import { useBlock } from '../../hooks/useElements';
import { useCurrentIdsBlock } from '../../hooks/useCurrentIds';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const BlockMixerContainer = () => {
    const dispatch = useDispatch();
    const { blockId } = useParams();
    const pageStructure = useSelector(selectors.base.$instancesForCurrentPage);
    const datasets = useSelector(selectors.raw.$rawLibraryDatasets);

    useCurrentIdsBlock();

    const elements = useBlock(pageStructure, blockId ?? '');

    const callbacks = useMemo(
        () => ({
            onSelectItem: (_instanceId: string) => {},
            onMoveItem: (_instanceId: string, _newOrderValue: number) => {},
            onAction: (actionType: ActionType, id: string) => {
                switch (actionType) {
                    case 'drillDown':
                        dispatch(
                            actions.currentIds.patch({
                                contentInstanceId: id,
                            })
                        );
                        break;
                }
            },
        }),
        []
    );

    return (
        <Mixer datasets={datasets} callbacks={callbacks} elements={elements}>
            <BlockTabs />
        </Mixer>
    );
};

export default BlockMixerContainer;
