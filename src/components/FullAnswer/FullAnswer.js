import React from 'react';
import { array } from 'prop-types';
import Style from './fullAnswer.module.css';

const FullAnswer = ({ answers, questions }) => {
    
    const questionsList = () => { 
        return questions.map(( item, index ) => (
            <li key = { `${index}qi` } >
                <article>
                    <h4 className = {
                        item.answer === answers[index] ? Style.rightAnswer : Style.wrongAnswer
                    }>
                        { item.text }
                    </h4>
                    <ul className = {Style.options}>
                        {
                            item.options.map(( option, ind ) => (
                                
                                <li
                                    key = { `${ind}oi` }
                                    className = { 
                                        ind !== item.answer && ind !== answers[index] ?
                                            null
                                            :
                                            ind === item.answer && ind === answers[index] ?
                                                Style.overlap
                                                :
                                                ind === item.answer && ind !== answers[index] ?
                                                    Style.right
                                                    :
                                                    Style.wrong
                                    }
                                >
                                    { option }
                                </li>
                            ))
                        }
                    </ul>
                </article>
            </li>
        ));
    }
    
    const list = questionsList();

    return (
        <ul className = { Style.fullAnswer }>
            { list }
        </ul>        
    );
    
}

FullAnswer.propTypes = {
    answers: array.isRequired,
    questions: array.isRequired,
}

export default FullAnswer;