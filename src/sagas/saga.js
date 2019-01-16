import { all, takeEvery } from 'redux-saga/effects';

import types from '../actions/types'
import { getQuestionsWorker } from './worker/getQuestions';
import { sendAnswersGetResultWorker } from './worker/sendAnswersGetResult';

function *getQuestionsWatcher(){
    yield takeEvery(types.GET_QUESTIONS, getQuestionsWorker);
}

function *sendAnswersGetResultWatcher(){    
    yield takeEvery(types.SEND_ANSWERS_TO_SERVER, sendAnswersGetResultWorker);
}



export function* saga () {
    yield all([
        getQuestionsWatcher(),
        sendAnswersGetResultWatcher(),
    ]);
}



