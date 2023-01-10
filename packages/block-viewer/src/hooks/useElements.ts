import React, { useContext, useMemo } from 'react';
import { EngineContext, parseSampleData } from '@gdi/engine';
import { unflattenInstanceProps } from 'shared-base';

export function useElements(blockId: string = '') {
    const { blocks } = useContext(EngineContext);

    const elements = useMemo(() => {
        const block = Object.values(blocks).find(
            (b: IBlock) => b.name === blockId
        );

        if (!block) {
            return [];
        }

        const { id, sampleData } = block;

        const firstKey = Object.keys(sampleData)[0];
        const firstData = parseSampleData(sampleData[firstKey]);

        return [
            {
                order: 1,
                pageInstanceId: 'i1',
                widgetId: id,
                instanceProps: unflattenInstanceProps(firstData),
            },
        ];
    }, [blockId, blocks]);

    return elements;
}
