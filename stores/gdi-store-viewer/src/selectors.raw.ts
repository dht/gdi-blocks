import { createSelector } from 'reselect';
import { IViewerStore } from './types';

export const $i = (state: { viewer: IViewerStore }) => state.viewer;
const $n = (): null => null;
const $o = (): void => {};

export const $rawViewerState = createSelector($i, (state: IViewerStore) => state.appStateViewer); // prettier-ignore
export const $rawCurrentIds = createSelector($i, (state: IViewerStore) => state.currentIds); // prettier-ignore
