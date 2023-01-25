import { IViewerStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<IViewerStore>(initialState);

export const actions = {
    ...generatedActions,
};
