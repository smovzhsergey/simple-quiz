import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import { saga } from '../sagas/saga';

const state = {
    answers: [],
    currentQuestionIndex: 0,
    initialized: false,
    isFetching: false,
    isFullAnswerVisible: false,
    questions: [],    
    results: {},
};

const dev = process.env.NODE_ENV === 'development'; // eslint-disable-line
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools && dev ? devtools : compose;
const sagaMiddleware = createSagaMiddleware();

export default createStore(
    reducer,
    state,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);