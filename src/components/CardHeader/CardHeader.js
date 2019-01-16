import React from 'react';
import { array, func, number, string } from 'prop-types';

import Style from './cardHeader.module.css';

const CardHeader = ({ answers, currentQuestion, getNextQuestion, progress, quantity, title }) => {

    const handleClick = (e) => getNextQuestion(+e.currentTarget.getAttribute( "data-direction" ));
    const list = Array
        .from( Array(quantity), (el, i) => i + 1 )        
        .map( ( el, i ) => {

            const style = typeof answers[i] === 'number' ? Style.answeredQuestion :
                i === currentQuestion-1 ? Style.current : null;
                
            return (
                <li
                    key = { i }
                    data-direction = { i }
                    className = { style }
                    onClick = { (e) => handleClick(e) }
                >{ el }</li>
            );
        });    

    return (
        <div>
            <h3>{ title }</h3>
            <h4>{ `Вопрос ${ currentQuestion } из ${ quantity }` }</h4>
            <ul className = { Style.selectQuestionWrap} >{ list }</ul>
            <p className = { Style.progress } style = {{ width: progress*100 + '%' }} />
        </div>);

};

CardHeader.propTypes = {
    answers:                array.isRequired,
    currentQuestion:        number.isRequired,
    getNextQuestion:        func.isRequired,
    progress:               number.isRequired,
    quantity:               number.isRequired,
    title:                  string.isRequired,
}

export default CardHeader;
