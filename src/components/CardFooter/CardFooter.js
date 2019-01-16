import React from 'react';
import { array, func, number } from 'prop-types';

import Style from './cardFooter.module.css'

const CardFooter = ({
    answers,
    currentQuestion,
    getNextQuestion,
    quantity,    
    sendAnswers
}) => {

    const handleClick = (e) => getNextQuestion(e.currentTarget.getAttribute( "data-direction" ));

    const answersQuantity = answers.filter(el => el !== undefined).length;
    
    return (
        <div>            
            { 
                currentQuestion > 1 &&            
                <button className = { Style.button } data-direction ="prev" onClick = { handleClick } >
                    Предыдущий вопрос
                </button>
            }
            { 
                currentQuestion !== quantity &&
                <button className = { Style.button } data-direction ="next" onClick = { handleClick } >
                    Следующий вопрос
                </button>     
            }
            {
                answersQuantity === quantity &&
                <button className = { Style.button } onClick = { () => sendAnswers() } >
                    Завершить тест
                </button>
            }
        </div>
    );
};

CardFooter.propTypes = {
    answers:            array.isRequired,
    currentQuestion:    number.isRequired,
    quantity:           number.isRequired,
    getNextQuestion:    func.isRequired,
    sendAnswers:        func.isRequired,
}

export default CardFooter;