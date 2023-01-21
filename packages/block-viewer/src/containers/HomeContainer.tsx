import React from 'react';
import groupedBlocks from '../data/raw/blocks.byTemplate.json';
import Home from '../components/Home/Home';
import { useLocalStorage } from 'react-use';
import { useNavigate } from 'react-router-dom';

export const HomeContainer = () => {
    const navigate = useNavigate();

    const [currentTemplate, setCurrentTemplate] = useLocalStorage<string>(
        'currentTemplate',
        ''
    );

    const callbacks = {
        navigateToBlock: (blockId: string) => {
            const path = `/blocks/${blockId}`;
            navigate(path);
        },
        navigateToTemplate: (templateId: string) => {
            setCurrentTemplate(templateId);
            navigate(`/templates/${templateId}`);
        },
        clearFocus: () => {
            setCurrentTemplate('');
        },
    };

    return (
        <Home
            groupedBlocks={groupedBlocks}
            callbacks={callbacks}
            currentTemplate={currentTemplate}
        />
    );
};

export default HomeContainer;
