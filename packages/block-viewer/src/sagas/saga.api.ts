import { delay, fork, put, select, takeEvery } from 'saga-ts';
import { axiosInstance } from '../utils/axios';
import { actions, selectors } from '../store';
import { calculatePagesFromInstances } from '../utils/pages';

function* api() {
    yield delay(100);

    try {
        const promises = [
            axiosInstance.get('/widgets'),
            axiosInstance.get('/instances'),
            axiosInstance.get('/instanceProps'),
            axiosInstance.get('/datasets'),
        ];

        const [widgets, instances, instanceProps, datasets] = yield Promise.all(
            promises
        );

        const pagesAndPageInstances = calculatePagesFromInstances(
            instances.data
        );

        yield put(actions.libraryWidgets.setAll(toObject(widgets.data)));
        yield put(actions.libraryInstances.setAll(toObject(instances.data)));
        yield put(actions.libraryInstancesProps.setAll(toObject(instanceProps.data))); // prettier-ignore
        yield put(actions.libraryDatasets.setAll(datasets.data));
        yield put(actions.libraryPages.setAll(pagesAndPageInstances.libraryPages)); // prettier-ignore
        yield put(actions.libraryPageInstances.setAll(pagesAndPageInstances.libraryPageInstances)); // prettier-ignore
    } catch (err) {
        console.log('Error while  loading data', err);
    }
}

export const toObject = (array: any[]) => {
    return array.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {});
};

type ActionSave = {
    type: 'PATCH_LIBRARYINSTANCESPROP';
    id: string;
    payload: Json;
};

function* save(action: ActionSave) {
    const { id, payload } = action;

    yield put(
        actions.currentIds.patch({
            contentInstanceId: '',
        })
    );

    yield axiosInstance.patch(`/instanceProps/${id}`, payload);
}

export function* root() {
    yield delay(300);
    yield* fork(api);
    yield takeEvery('PATCH_LIBRARYINSTANCESPROP', save);
}
