import { actions } from './actions';
import { clearState, initialState, reducers } from './initialState';
import { endpointsConfigOverrides } from './api';
import { selectors } from './selectors.index';
import { combineReducers, createStore } from 'redux';

export const viewer = {
    initialState,
    actions,
    reducers,
    selectors,
    endpointsConfigOverrides,
    clearState,
};

const root = combineReducers(reducers);

export const store = createStore(root, initialState);
