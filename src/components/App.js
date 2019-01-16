import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { arrayOf, bool, func, number, object, objectOf } from 'prop-types';

import actions from '../actions/actions';

import Card from './Card/Card';
import QuizResult from './QuizResult/QuizResult';
import Spinner from './Spinner/Spinner';
import StartPage from './StartPage/StartPage';

class App extends Component {

    static propTypes = {
        actions:                objectOf(func).isRequired,
        answers:                arrayOf(number).isRequired,
        currentQuestionIndex:   number.isRequired,    
        initialized:            bool.isRequired,
        isFetching:             bool.isRequired,
        isFullAnswerVisible:    bool.isRequired,
        questions:              arrayOf(object).isRequired,
        results:                objectOf(number)
    }

    componentDidMount () {
        this.props.actions.getQuestions();
    }

    component = () => {
        const {
            actions,
            answers,
            currentQuestionIndex,
            isFetching,
            isFullAnswerVisible,
            questions,
            results
        } = this.props;
        const question = questions[currentQuestionIndex];

        if (!question) return null;

        const progress = (currentQuestionIndex +1 )/ questions.length ;

        return (            
            !results.total ?
                <Card
                    actions = { actions }
                    answers = { answers }
                    currentQuestion = { currentQuestionIndex +1 }
                    currentQuestionIndex = { currentQuestionIndex }
                    isFetching = { isFetching }
                    quantity = { questions.length }
                    question = { question }
                    progress = { progress }
                />
                :
                <QuizResult
                    answers = { answers }
                    isFullAnswerVisible = { isFullAnswerVisible }
                    questions = { questions }
                    results = { results }
                    repeat = { actions.repeatQuiz }
                    toggleVisibility = { actions.toggleVisibility }
                />
        );
    }

    render () {

        const renderComponent = this.component();
        const { actions, initialized, isFetching, questions } = this.props;

        return (
            <section style = {{'position': 'relative'}} >
                { isFetching && <Spinner /> }
                { 
                    !initialized &&
                    <StartPage
                        initializeQuiz = { actions.initializeQuiz }
                        isFetching = { isFetching }
                        quantity = { questions.length }
                    />
                }
                { initialized && !isFetching && renderComponent }
            </section> 
        );
    }
}

const mapStateToProps = ( state ) => ({
    answers:                state.answers,
    currentQuestionIndex:   state.currentQuestionIndex,    
    initialized:            state.initialized,    
    isFetching:             state.isFetching,
    isFullAnswerVisible:    state.isFullAnswerVisible,
    questions:              state.questions,
    results:                state.results,
});

const mapDispatchToProps = ( dispatch )=> ({
    actions: bindActionCreators({...actions}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
