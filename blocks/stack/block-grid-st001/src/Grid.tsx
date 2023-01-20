import React from 'react';
import { Wrapper } from './Grid.style';

export const id = 'com.usegdi.blocks.grid-st001';

export type GridProps = {
    strings: GridStrings;
    colors: GridColors;
    extra: GridExtra;
};

export type GridStrings = {
    slogan?: string;
    header: string;
    button?: string;
};

export type GridColors = {};

export type GridExtra = {
    imageUrl: string;
    imageUrlMobile: string;
    socialDatasetId: string;
};

export function Grid(props: GridProps) {
    const { strings, extra } = props;
    const { slogan, header, button } = strings;

    return (
        <Wrapper {...extra} data-testid='Grid-container'>
            nice
        </Wrapper>
    );
}

export default Grid;
