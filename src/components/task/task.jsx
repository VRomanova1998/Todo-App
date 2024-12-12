import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import './task.css';

export default class Task extends Component {
  state = {
    timeCreateTask: new Date(),
    distanceToNow: 'less than 5 seconds',
    edit: false,
    editingLabel: '',
  };

  static defaultProps = {
    onDeleteTask: () => {},
    onToggleDone: () => {},
    label: 'task',
    done: false,
  };

  static propTypes = {
    onDeleteTask: PropTypes.func,
    onToggleDone: PropTypes.func,
    label: PropTypes.string,
    done: PropTypes.bool,
  };

  changeInput = (e) => {
    console.log();
    this.setState({
      editingLabel: e.target.value,
    });
  };

  editSubmit = (e) => {
    if (e.key === 'Enter') {
      if (this.state.editingLabel !== '') {
        this.setState({
          edit: false,
        });
        this.props.editAdd(this.state.editingLabel);
      }
    }
  };

  editTask = () => {
    this.setState({
      edit: true,
    });
  };

  render() {
    const { label, onDeleteTask, onToggleDone, done, id, hidden } = this.props;

    let className = '';
    if (done) {
      className += ' completed';
    }
    if (hidden) {
      className += ' hidden';
    }
    if (this.state.edit) {
      className += ' editing';
    }

    setInterval(() => {
      this.setState({
        distanceToNow: formatDistanceToNow(this.state.timeCreateTask, { includeSeconds: true, addSuffix: true }),
      });
    }, 5000);

    return (
      <li className={className} id={id}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleDone} />
          <label>
            <span className="description">{label}</span>
            <span className="created">created {this.state.distanceToNow}</span>
          </label>
          <button className="icon icon-edit" onClick={this.editTask}></button>
          <button className="icon icon-destroy" onClick={onDeleteTask}></button>
        </div>
        <input
          type="text"
          className="edit"
          defaultValue={label}
          onKeyDown={this.editSubmit}
          onChange={this.changeInput}
        />
      </li>
    );
  }
}
