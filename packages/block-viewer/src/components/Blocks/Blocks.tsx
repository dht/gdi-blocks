import React from 'react';
import { Wrapper } from './Blocks.style';
import { Multi } from '@gdi/web-ui';
import { definitions } from '../../definitions';

export type BlocksProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    dispatch: any;
};

export function Blocks(props: BlocksProps) {
    const { data, callbacks, dispatch, allOptions } = props;

    return (
        <Wrapper className='Blocks-wrapper' data-testid='Blocks-wrapper'>
            <Multi
                id='WidgetsFull'
                itemType='widget'
                data={data}
                callbacks={callbacks}
                definitions={definitions}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Wrapper>
    );
}

export default Blocks;
