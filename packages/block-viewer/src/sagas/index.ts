import ping from './ping';
import { fork, take } from 'saga-ts';
import { root as api } from './saga.api';

function* root() {
    yield* fork(api);
    yield* fork(ping);
}

export const appSagas = [root];
