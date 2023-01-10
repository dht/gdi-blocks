import { generateReducersForStore } from 'redux-store-generator';
import { IViewerStore } from './types';

export const initialState: IViewerStore = {
    appStateViewer: {
        stateKey: 'viewer',
        mobileModeOn: false,
    },
};

export const reducers = generateReducersForStore<IViewerStore>(initialState);

export const clearState = (store: any) => {
    return store;
};
