import React, { useContext, useMemo } from 'react';
import { EngineContext } from '@gdi/engine';

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
                widgetId: 'com.usegdi.blocks.section-gkj41',
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
    return useElements(pageStructure, [], (element: IElement) => {
        const { widgetId } = element;
        const name = widgetId.split('.').pop();
        return name === blockId;
    });
};

const i = () => true;
