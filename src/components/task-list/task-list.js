import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../task/task';

import './task-list.css';

export default class TaskList extends Component {
  static defaultProps = {
    onDeleteTask: () => {},
    onToggleDone: () => {},
    todos: [],
  };

  static propTypes = {
    onDeleteTask: PropTypes.func,
    onToggleDone: PropTypes.func,
    todos: PropTypes.arrayOf(PropTypes.object),
  };
  render() {
    const { todos, onDeleteTask, onToggleDone } = this.props;

    const elements = todos.map((item) => {
      return (
        <Task
          {...item}
          key={item.id}
          onDeleteTask={() => onDeleteTask(item.id)}
          onToggleDone={() => onToggleDone(item.id)}
        />
      );
    });

    return <ul className="todo-list">{elements}</ul>;
  }
}
