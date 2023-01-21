import React, { useMemo } from 'react';
import Mixer from '../../components/Mixer/Mixer';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../../store';
import { useParams } from 'react-router-dom';
import allMenus from '../../data/blocks.menu.json';
import { useElements } from '../../hooks/useElements';
import { TemplateTabs } from '../../components/Tabs/Tabs';
import { useCurrentIdsTemplate } from '../../hooks/useCurrentIds';

export const TemplateMixerContainer = () => {
    const dispatch = useDispatch();
    const { templateId } = useParams();

    const pageStructure = useSelector(selectors.base.$instancesForCurrentPage);
    const datasets = useSelector(selectors.raw.$rawLibraryDatasets);
    const menuItems = allMenus[templateId ?? ''] ?? [];

    const elements = useElements(pageStructure, menuItems);

    useCurrentIdsTemplate();

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
            <TemplateTabs />
        </Mixer>
    );
};

export default TemplateMixerContainer;
