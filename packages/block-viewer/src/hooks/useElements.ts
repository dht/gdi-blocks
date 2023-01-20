import React, { useContext, useMemo } from 'react';
import { EngineContext, parseSampleData } from '@gdi/engine';
import { unflattenInstanceProps, sortBy } from 'shared-base';

export function useElements(
    blockIds: string[] = [],
    order = {},
    menuItems: string[] = []
) {
    const { blocks } = useContext(EngineContext);

    const elements = useMemo(() => {
        const items: Json = blockIds
            .map((blockId: string) => {
                const block = Object.values(blocks).find(
                    (b: IBlock) => b.name === blockId
                );

                if (!block) {
                    return null;
                }

                const { id, sampleData } = block;
                const firstKey = Object.keys(sampleData)[0];
                const firstData = parseSampleData(sampleData[firstKey]);

                return {
                    id,
                    order: order[blockId] ?? 1,
                    pageInstanceId: 'i1',
                    widgetId: id,
                    instanceProps: unflattenInstanceProps(firstData),
                };
            })
            .filter((i) => i)
            .sort(sortBy('order'));

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

        return items;
    }, [blockIds, blocks]);

    return elements as IElement[];
}
