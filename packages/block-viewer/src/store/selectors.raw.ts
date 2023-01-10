import { createSelector } from 'reselect';
import { IViewerStore } from './types';

export const $i = (state: IViewerStore) => state;

const $n = (): null => null;
const $o = (): void => {};

export const $rawViewerState = createSelector($i, (state: IViewerStore) => state.appStateViewer); // prettier-ignore
