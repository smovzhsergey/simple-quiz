import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import Styles from './timer.module.css';

class Timer extends Component {

    constructor ( props ) {

        super ( props );
        
        this.state = {
            comingSoon: false,
            minutes: '02',
            seconds: '00',
        }        
        
        this.secondsRemaining = this.state.minutes * 60;
        this.tick = this.tick.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    static propTypes = {
        isFetching:     bool.isRequired,
        sendAnswers:    func.isRequired,
    }

    componentDidMount() {
        this.intervalHandle = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        this.stopTimer();
    }
    
    tick() {
        
        let min = Math.floor(this.secondsRemaining / 60);
        let sec = this.secondsRemaining - (min * 60); 
        
        this.setState({
            minutes: min,
            seconds: sec,
        })
        
        if (sec < 10) 
            this.setState({ seconds: "0" + this.state.seconds });
        
    
        if (min < 10)
            this.setState({ minutes: "0" + min });

        if (min < 1 && sec < 10) {
            if (!this.state.comingSoon)
                this.setState({ comingSoon: true });
        }   
    
        if (min === 0 && sec === 0)
            this.stopTimer();
    
        this.secondsRemaining--
    }

    stopTimer () {

        clearInterval(this.intervalHandle);

        if (!this.props.isFetching)
            this.props.sendAnswers();
    }
    
    render () {

        const { comingSoon, minutes, seconds } = this.state;
        const style = comingSoon ? Styles.warning : null;

        return (
            <div className = { Styles.timer } >
                <p className = { style }>{ minutes }:{ seconds }</p>
            </div>
        );

    }
}

export default Timer;