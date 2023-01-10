import { StoreStructure } from 'redux-store-generator';

export type IViewerStore = StoreStructure & {
    appStateViewer: IViewerState;
};

export type IViewerState = {
    stateKey: string;
    mobileModeOn?: boolean;
};
