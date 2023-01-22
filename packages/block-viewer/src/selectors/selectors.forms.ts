import * as base from './selectors.base';
import { createSelector } from 'reselect';
import { IViewerStore } from '../store/types';
import { instanceToWidgetSchemas, instanceToInstanceProps } from '@gdi/engine';

export const $i = (state: { mixer: IViewerStore }) => state.mixer;

export const $contentWidgetSchemas = createSelector(
    base.$instanceContent,
    (instance): IFormConfig | undefined => {
        return instanceToWidgetSchemas(instance);
    }
);

export const $contentInstanceProps = createSelector(
    base.$instanceContent,
    (instance): Json => {
        return instanceToInstanceProps(instance);
    }
);

export const $contentFormOptions = createSelector(
    base.$instanceContent,
    (instances): Json => {
        return {};
    }
);

export const $contentWidgetSchemasSelected = createSelector(
    base.$instanceSelected,
    (instance): IFormConfig | undefined => {
        return instanceToWidgetSchemas(instance);
    }
);

export const $contentInstancePropsSelected = createSelector(
    base.$instanceSelected,
    (instance): Json => {
        return instanceToInstanceProps(instance);
    }
);

export const $contentFormOptionsSelected = createSelector(
    base.$instanceSelected,
    (instances): Json => {
        return {};
    }
);
