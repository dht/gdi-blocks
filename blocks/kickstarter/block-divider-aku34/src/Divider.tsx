import React from 'react';
import { Wrapper } from './Divider.style';

export const id = 'com.usegdi.blocks.divider-aku34';

export type DividerProps = {
    strings: DividerStrings;
    colors: DividerColors;
    extra: DividerExtra;
};

export type DividerStrings = {};

export type DividerColors = {};

export type DividerExtra = {};

export function Divider(_props: DividerProps) {
    return (
        <Wrapper
            className='Divider-wrapper'
            data-testid='Divider-wrapper'
        ></Wrapper>
    );
}

export default Divider;
