import React from 'react';
import { array, bool, func, object } from 'prop-types';
import Style from './quizResult.module.css';

import FullAnswer from '../FullAnswer/FullAnswer';

const QuizResult = ({
    answers,
    isFullAnswerVisible,
    questions,
    results: {
        correct,
        incorrect,
        total
    },
    repeat,
    toggleVisibility
}) => {

    const showAnswers = () => (
        isFullAnswerVisible ?
            <FullAnswer answers = { answers } questions = { questions } />
            :
            null        
    )

    const repeatHandle = () => {
        if (isFullAnswerVisible) {
            toggleVisibility();
        }

        repeat();
    }

    const fullResult = showAnswers();
    
    return (
        <section className = { Style.wrap }>
            <h2>Тест завершен!</h2>
            <p>Всего вопросов: { total }</p>
            <p>Правильных ответов: <span className = { Style.right }>{ correct }</span></p>
            <p>Неправильных ответов: <span className = { Style.wrong }>{ incorrect }</span></p>
            <button onClick = { repeatHandle } >Начать снова</button>
            <button onClick = { toggleVisibility } >{ !isFullAnswerVisible ? "Развернуть результат" : "Свернуть результат" }</button>
            { fullResult }
        </section>
    )
};

QuizResult.propTypes = {
    answers:                array.isRequired,
    isFullAnswerVisible:    bool.isRequired,
    questions:              array.isRequired,
    results:                object.isRequired,
    repeat:                 func.isRequired,
    toggleVisibility:       func.isRequired
}

export default QuizResult;
