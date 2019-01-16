import React from 'react';

const CardBody = ({ answer, answers, currentQuestionIndex, items, onAnswer }) => {

    const optionList = () => {

        return items.map(( item, index ) => (
            <p key = { index } >
                <label className = { answer === index ? Style.checked : null }>
                    <input
                        className = { Style.customInput }
                        type = 'radio'
                        name = 'answer'
                        value = { answer }
                        checked = { answer === index || answers[currentQuestionIndex] }
                        onChange = { () => onAnswer(index) }
                    />
                    { item }
                </label>
            </p>
        ));
    };
    console.log(answers[currentQuestionIndex]);
    const list = optionList();

    return <section>{ list }</section>;
    
}

CardBody.propTypes = {
    items: arrayOf(string).isRequired,
    onAnswer: func.isRequired
}

export default CardBody;