import React, { useMemo } from 'react';
import Blocks from '../components/Blocks/Blocks';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store/selectors.index';

export const BlocksContainer = () => {
    const dispatch = useDispatch();
    const allOptions = useSelector(selectors.options.$allOptions);
    const data = [];

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {},
            onSelectionChange: (ids: string[]) => {},
            onCustomAction: (actionId: string, data?: Json) => {},
        }),
        []
    );

    return (
        <Blocks
            data={data}
            allOptions={allOptions}
            callbacks={callbacks}
            dispatch={dispatch}
        />
    );
};

export default BlocksContainer;
