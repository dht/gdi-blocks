import { generateReducersForStore } from 'redux-store-generator';
import { IViewerStore } from './types';
import p from '../package.json';

export const initialState: IViewerStore = {
    meta: {
        version: p.version,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        description: p.description,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateViewer: {
        stateKey: 'viewer',
        mobileModeOn: false,
    },
    currentIds: {
        blockId: '',
        contentModalBlockId: '',
        templateId: '',
    },
};

export const reducers = generateReducersForStore<IViewerStore>(initialState);

export const clearState = (store: any) => {
    return store;
};
