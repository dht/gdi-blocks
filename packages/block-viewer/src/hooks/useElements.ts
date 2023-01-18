import React, { useContext, useMemo } from 'react';
import { EngineContext, parseSampleData } from '@gdi/engine';
import { unflattenInstanceProps, sortBy } from 'shared-base';

export function useElements(blockIds: string[] = [], order = {}) {
    const { blocks } = useContext(EngineContext);

    const elements = useMemo(() => {
        return blockIds
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
                    order: order[blockId] ?? 1,
                    pageInstanceId: 'i1',
                    widgetId: id,
                    instanceProps: unflattenInstanceProps(firstData),
                };
            })
            .filter((i) => i)
            .sort(sortBy('order'));
    }, [blockIds, blocks]);

    return elements as IElement[];
}
