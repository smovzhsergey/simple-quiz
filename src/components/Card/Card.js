import React, { Component } from 'react';
import { array, bool, func, number, object, objectOf } from 'prop-types';

import CardHeader from '../CardHeader/CardHeader';
import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';
import Timer from '../Timer/Timer';

import Style from './card.module.css';

export default class Card extends Component {

    static propTypes = {
        actions:                objectOf(func).isRequired,
        answers:                array.isRequired,
        currentQuestion:        number.isRequired,
        currentQuestionIndex:   number.isRequired,
        isFetching:             bool.isRequired,
        quantity:               number.isRequired,
        question:               object.isRequired,
        progress:               number.isRequired
    }
    
    state = {
        answer: undefined,
    }

    componentWillReceiveProps (nextProps) {        
        if (nextProps.currentQuestionIndex !== this.props.currentQuestionIndex) {
            this.setState({answer: this.props.answers[nextProps.currentQuestionIndex]});
        }
    }

    setAnswer = (index) => {
        
        const { actions: { addAnswer }, answers, currentQuestionIndex } = this.props;

        this.setState({ answer: index });

        if(answers[currentQuestionIndex] !== index) {
            answers[currentQuestionIndex] = index;
            addAnswer(answers);
        }
    };

    getNextQuestion = (direction) => {        
        
        const { currentQuestionIndex, actions: { setNextQuestion } } = this.props;
        let index;

        this.setState({ answer: undefined });
        
        if (direction === 'next') {
            index = currentQuestionIndex + 1;
        } else if (direction === 'prev') {
            index = currentQuestionIndex - 1;
        } else {
            index = direction;
        }

        setNextQuestion(index);
    }

    render () {
            
        const {
            actions: {
                sendAnswersToServer
            },
            answers,
            isFetching,
            question: {
                text,
                options
            },
            progress,
            quantity, 
            currentQuestion
        } = this.props;

        const { answer } = this.state;
        
        return (
            <section className = { Style.wrap }>                
                <Timer
                    sendAnswers = { sendAnswersToServer }
                    isFetching = { isFetching }
                />
                
                <CardHeader
                    answers = { answers }
                    title = { text }
                    progress = { progress }
                    quantity = { quantity }
                    currentQuestion = { currentQuestion }
                    getNextQuestion = { this.getNextQuestion }
                />

                <CardBody
                    answer = { answer }
                    items = { options }
                    selectAnswer = { this.setAnswer }
                />

                <CardFooter
                    answers = { answers }
                    currentQuestion = { currentQuestion }
                    getNextQuestion = { this.getNextQuestion }
                    quantity = { quantity }
                    sendAnswers = { sendAnswersToServer }
                />

            </section>
        );
    }
}
