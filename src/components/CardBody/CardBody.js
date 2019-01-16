import React from 'react';
import { arrayOf, func, string } from 'prop-types';

import Style from './cardBody.module.css';

const CardBody = ({ answer, items, selectAnswer }) => {

    const optionList = () => {

        return items.map(( item, index ) => (
            <p key = { index } >
                <label className = { answer === index ? Style.checked : null }>
                    <input
                        className = { Style.customInput }
                        type = 'radio'
                        name = 'answer'
                        value = { answer }
                        checked = { answer === index }
                        onChange = { () => selectAnswer(index) }
                    />
                    { item }
                </label>
            </p>
        ));
    }

    const list = optionList();

    return <section>{ list }</section>;
    
}

CardBody.propTypes = {
    items:          arrayOf(string).isRequired,
    selectAnswer:   func.isRequired
}

export default CardBody;
