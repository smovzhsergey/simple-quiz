import { call, put } from 'redux-saga/effects';

import actions from '../../actions/actions';

const api = 'api/quiz';

export function* getQuestionsWorker () {

    try {

        yield put(actions.startFetching());

        const response = yield call(fetch, api, {
            method: 'GET'
        });

        if (response.status !== 200) {
            throw new Error("Resource isn't available");
        }

        const { quiz } = yield call([response, response.json]);

        yield put(actions.getQuestionsSuccess(quiz));

    }
    catch ({ message }) {
        yield put(actions.getQuestionsFail());
    }
    finally {
        yield put(actions.stopFetching());
    }
}