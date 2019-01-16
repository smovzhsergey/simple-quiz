import types from '../actions/types';

export default function reducer(state, { type, payload }){
    switch (type){

        case types.GET_QUESTIONS_SUCCESS:
            return {
                ...state,
                answers: Array(payload.length),
                questions: payload,
            };

        case types.SET_NEXT_QUESTION:
            return {
                ...state,
                currentQuestionIndex: payload
            };

        case types.ADD_ANSWER:
            return {
                ...state,
                answers: payload
            };

        case types.GET_RESULTS_SUCCESS:
            return {
                ...state,
                results: payload
            };

        case types.TOGGLE_VISIBILITY:
            return {
                ...state,
                isFullAnswerVisible: !state.isFullAnswerVisible
            };

        case types.REPEAT_QUIZ:
            return {
                ...state,
                answers: Array(state.questions.length),
                currentQuestionIndex: 0,                
                results: {}
            };

        case types.INITIALIZE_QUIZ:
            return {
                ...state,
                initialized: true
            };

        case types.START_FETCHING:
            return {
                ...state,
                isFetching: true
            };

        case types.STOP_FETCHING:
            return {
                ...state,
                isFetching: false
            };

        default:
            return state;
    }
}