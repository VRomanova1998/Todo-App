import React, { Component } from 'react';

import '../task/task.css';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countSeconds: 0,
      timmer: '00:00',
    };
    this.startTimer = null;
  }

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
      countSeconds++;
      let newTime = this.toTime(countSeconds);
      this.setState({
        countSeconds: countSeconds,
        timmer: newTime,
      });
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
