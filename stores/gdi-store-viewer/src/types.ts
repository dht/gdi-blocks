import { StoreStructure } from 'redux-store-generator';

export type IViewerStore = StoreStructure & {
    meta: IGdiMeta;
    appStateViewer: IViewerState;
    currentIds: IViewerCurrentIds;
};

export type IViewerState = {
    stateKey: string;
    mobileModeOn?: boolean;
};

export type IViewerCurrentIds = {
    templateId: string;
    blockId: string;
    contentModalBlockId: string;
};
