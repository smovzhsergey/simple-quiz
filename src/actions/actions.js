import types from './types';

export default Object.freeze({
    getQuestions: () =>({
        type: types.GET_QUESTIONS,
    }),
    getQuestionsSuccess: (questions) =>({
        type: types.GET_QUESTIONS_SUCCESS,
        payload: questions
    }),
    getQuestionsFail: () =>({
        type: types.GET_QUESTIONS_FAIL,
    }),
    setNextQuestion: (nextIndex) =>({
        type: types.SET_NEXT_QUESTION,
        payload: nextIndex
    }),
    sendAnswersToServer: (answers) =>({
        type: types.SEND_ANSWERS_TO_SERVER,
        payload: answers,
    }),
    addAnswer: (answer) =>({
        type: types.ADD_ANSWER,
        payload: answer
    }),
    getResultsSuccess: (results) =>({
        type: types.GET_RESULTS_SUCCESS,
        payload: results
    }),
    getResultsFail: () =>({
        type: types.GET_RESULTS_FAIL,
    }),
    repeatQuiz: () =>({
        type: types.REPEAT_QUIZ,
    }),
    startFetching: () =>({
        type: types.START_FETCHING,
    }),
    stopFetching: () =>({
        type: types.STOP_FETCHING,
    }),
    toggleVisibility: () =>({
        type: types.TOGGLE_VISIBILITY,
    }),
    initializeQuiz: () =>({
        type: types.INITIALIZE_QUIZ,
    })
})