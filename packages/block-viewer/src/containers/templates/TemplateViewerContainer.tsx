import React from 'react';
import Viewer from '../../components/Viewer/Viewer';
import { useSelector } from 'react-redux';
import { selectors } from '../../store';
import { useParams } from 'react-router-dom';
import { useElements } from '../../hooks/useElements';
import allMenus from '../../data/blocks.menu.json';
import { TemplateTabs } from '../../components/Tabs/Tabs';
import { useCurrentIdsTemplate } from '../../hooks/useCurrentIds';

export const TemplateViewerContainer = () => {
    const { templateId } = useParams();
    const pageStructure = useSelector(selectors.base.$instancesForCurrentPage);
    const datasets = useSelector(selectors.raw.$rawLibraryDatasets);
    const menuItems = allMenus[templateId ?? ''] ?? [];

    const elements = useElements(pageStructure, menuItems);

    useCurrentIdsTemplate();

    return (
        <Viewer elements={elements} mobileMode={false} datasets={datasets}>
            <TemplateTabs />
        </Viewer>
    );
};

export default TemplateViewerContainer;
