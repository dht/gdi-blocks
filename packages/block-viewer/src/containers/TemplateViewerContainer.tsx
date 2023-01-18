import React from 'react';
import TemplateViewer from '../components/TemplateViewer/TemplateViewer';
import datasets from '../blocks/blocks.datasets.json';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectors } from '../store/selectors.index';
import { useElements } from '../hooks/useElements';
import byTemplates from '../blocks/blocks.byTemplate.json';

export const TemplateViewerContainer = () => {
    const { templateId } = useParams();
    const appState = useSelector(selectors.raw.$rawViewerState);

    const blocksWithOrder = byTemplates[templateId ?? ''] ?? {};

    const blockIds = Object.keys(blocksWithOrder);

    const mobileMode = appState.mobileModeOn;

    const elements = useElements(blockIds, blocksWithOrder);

    return (
        <TemplateViewer
            elements={elements}
            mobileMode={mobileMode}
            datasets={datasets}
        />
    );
};

export default TemplateViewerContainer;
