import { StoreBuilder } from 'redux-connected';
import { mixer } from '@gdi/store-mixer';
import { viewer } from '@gdi/store-viewer';
import { appSagas } from '../sagas';

let store: any;

export const init = () => {
    const storeBuilder = new StoreBuilder('viewer');

    storeBuilder
        .withReducers('viewer', viewer.reducers)
        .withInitialState('viewer', viewer.initialState)
        .withDevtoolsExtensions(true)
        .withSagas(...appSagas)
        .withReducers('mixer', mixer.reducers)
        .withInitialState('mixer', mixer.initialState)
        .withDevtoolsExtensions(true);

    store = storeBuilder.build();
    return store;
};

export const actions = mixer.actions;
export const selectors = mixer.selectors;
