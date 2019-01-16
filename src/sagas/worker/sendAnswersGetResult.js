import { call, put, select } from 'redux-saga/effects';

import actions from '../../actions/actions';

const api = 'api/quiz';

export function* sendAnswersGetResultWorker () {

    try {

        yield put(actions.startFetching());

        const answers = yield select(state => state.answers);

        const request = yield call(fetch, api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(answers)
        });

        if (request.status !== 200) {
            throw new Error("Resource isn't available");
        }

        const {results} = yield call([request, request.json]);

        yield put(actions.getResultsSuccess(results));

    }
    catch ({ message }) {
        yield put(actions.getResultsFail(message));
    }    
    finally {
        yield put(actions.stopFetching());
    }
}