import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Form } from '@gdi/web-ui';
import { actions, selectors } from '../store';
import {
    ContentForm,
    instanceToInstanceProps,
    instanceToWidgetSchemas,
} from '@gdi/engine';

export const ModalContentContainer = () => {
    const dispatch = useDispatch();
    const element = useSelector(selectors.base.$instanceContent);
    const formOptions = useSelector(selectors.forms.$contentFormOptions);

    const widgetSchemas = useMemo(() => {
        if (!element) {
            return;
        }

        return instanceToWidgetSchemas(element);
    }, [element]);

    const instanceProps = useMemo(() => {
        if (!element) {
            return;
        }

        return instanceToInstanceProps(element);
    }, [element]);

    function onClose() {
        dispatch(actions.currentIds.patch({ contentInstanceId: '' }));
    }

    const callbacks = useMemo(
        () => ({
            onSave: (change: Json, _allData: Json) => {
                dispatch(
                    actions.libraryInstancesProps.patch(element.id, change)
                );
                return Promise.resolve(true);
            },
        }),
        [element]
    );

    if (!element || !widgetSchemas || !instanceProps) {
        return null;
    }

    return (
        <Modal open={true} title='Content' onClose={onClose}>
            <ContentForm
                id='content-form'
                widgetSchemas={widgetSchemas}
                instanceProps={instanceProps}
                formOptions={formOptions}
                allDetails={allDetails}
                onSave={callbacks.onSave}
                formCmp={Form}
            />
        </Modal>
    );
};

const allDetails = {};

export default ModalContentContainer;
