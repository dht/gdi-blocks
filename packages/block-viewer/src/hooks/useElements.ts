import React, { useContext, useMemo } from 'react';
import { EngineContext } from '@gdi/engine';
import allMenus from '../data/blocks.menu.json';
import { findTemplateByBlockId } from '../utils/pages';

const SECTION_WIDGET_ID = 'com.usegdi.blocks.section-gkj41';

export function useElements(
    pageStructure: IElement[],
    menuItems: string[] = [],
    predicate?: (element: IElement) => boolean
) {
    const { blocks } = useContext(EngineContext);

    const elements = useMemo(() => {
        const items = [...pageStructure];

        menuItems.forEach((menuItem) => {
            items.push({
                id: `menu-${menuItem}`,
                order: 0,
                pageInstanceId: 'i1',
                widgetId: SECTION_WIDGET_ID,
                instanceProps: {
                    strings: {
                        text: menuItem,
                    },
                    extra: {
                        id: menuItem,
                        isHidden: true,
                    },
                },
                widget: {
                    tags: ['type-section'],
                },
            });
        });

        return items.filter(predicate || i);
    }, [pageStructure, blocks]);

    return elements as IElement[];
}

export const useBlock = (pageStructure: IElement[], blockId: string) => {
    const templateId = findTemplateByBlockId(blockId as string);
    const menuItems = allMenus[templateId ?? ''] ?? [];

    return useElements(pageStructure, menuItems, (element: IElement) => {
        const { widgetId } = element;
        const name = widgetId.split('.').pop();
        return name === blockId || widgetId === SECTION_WIDGET_ID;
    });
};

const i = () => true;
