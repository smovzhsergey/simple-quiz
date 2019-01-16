import React from 'react';

import { bool, func, number } from 'prop-types';

const StartPage = ({ initializeQuiz, isFetching, quantity }) => (
    !isFetching &&
    <div className = 'wrap' style = {{ 'textAlign': 'center' }}>
        <h1>Тест</h1>
        <p>Тест состоит из { quantity } вопросов, время на прохождение - 2 минуты</p>
        <p>Прохождение теста завершается нажатием на кнопку "Завершить тест" либо автоматически по истечении времени. Если на какой либо вопрос не дан ответ, то ответ на него защитывается как неправильный. Если ответы даны не на все вопросы - досрочное завершение теста невозможно. На вопросы можно отвечать в произвольном порядке.</p>      
        <button onClick = { initializeQuiz }>Начать тест</button>
    </div>
);

StartPage.propTypes = {
    initializeQuiz: func.isRequired,
    isFetching:     bool.isRequired,
    quantity:       number.isRequired
}

export default StartPage;