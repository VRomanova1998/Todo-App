import React, { Component } from 'react';

import '../task/task.css';

export default class Task extends Component {
  summarySeconds = Number(this.props.min) * 60 + Number(this.props.sec);

  minuteAmount = this.props.min.length === 1 ? `0${this.props.min}` : `${this.props.min}`;
  secondsAmount = this.props.sec.length === 1 ? `0${this.props.sec}` : `${this.props.sec}`;

  state = {
    countSeconds: this.summarySeconds,
    timmer: `${this.minuteAmount}:${this.secondsAmount}`,
  };

  startTimer = null;

  componentWillUnmount() {
    clearInterval(this.startTimer);
  }

  nilFirst = (t) => {
    if (t.toString().length === 1) {
      return '0' + t;
    }
    return t.toString();
  };

  toTime = (sec = 0) => {
    return this.nilFirst(Math.trunc(sec / 60)) + ':' + this.nilFirst(sec % 60);
  };

  playTimer = () => {
    let countSeconds = this.state.countSeconds;
    this.startTimer = setInterval(() => {
      if (countSeconds === 0) {
        this.stopTimer();
        this.setState({
          timmer: 'Время вышло',
        });
      } else {
        countSeconds--;
        let newTime = this.toTime(countSeconds);
        this.setState({
          countSeconds: countSeconds,
          timmer: newTime,
        });
      }
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.startTimer);
  };

  render() {
    return (
      <span className="description">
        <button className="icon icon-play" onClick={this.playTimer}></button>
        <button className="icon icon-pause" onClick={this.stopTimer}></button>
        {this.state.timmer}
      </span>
    );
  }
}
