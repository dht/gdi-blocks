import React from 'react';
import BlockViewer from '../components/BlockViewer/BlockViewer';
import datasets from '../blocks/blocks.datasets.json';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectors } from '../store/selectors.index';
import { useElements } from '../hooks/useElements';

export const BlockViewerContainer = () => {
    const { blockId } = useParams();
    const appState = useSelector(selectors.raw.$rawViewerState);
    const mobileMode = appState.mobileModeOn;

    const elements = useElements(blockId);

    return (
        <BlockViewer
            elements={elements}
            mobileMode={mobileMode}
            datasets={datasets}
        />
    );
};

export default BlockViewerContainer;
