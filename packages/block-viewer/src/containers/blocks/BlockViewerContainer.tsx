import React from 'react';
import Viewer from '../../components/Viewer/Viewer';
import { BlockTabs } from '../../components/Tabs/Tabs';
import { selectors } from '../../store';
import { useBlock } from '../../hooks/useElements';
import { useCurrentIdsBlock } from '../../hooks/useCurrentIds';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const BlockViewerContainer = () => {
    const { blockId } = useParams();
    const pageStructure = useSelector(selectors.base.$instancesForCurrentPage);
    const datasets = useSelector(selectors.raw.$rawLibraryDatasets);

    useCurrentIdsBlock();

    const elements = useBlock(pageStructure, blockId ?? '');

    return (
        <Viewer elements={elements} mobileMode={false} datasets={datasets}>
            <BlockTabs />
        </Viewer>
    );
};

export default BlockViewerContainer;
