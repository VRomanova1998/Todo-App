import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TaskFilter from '../task-filter/tasks-filter';

import './footer.css';

export default class Footer extends Component {
  static defaultProps = {
    countActiveTask: 0,
    // displayActiveTask: () => {},
    // displayAllTask: () => {},
    // displayCompletedTask: () => {},
    clearCompleted: () => {},
    activeButton: 'All',
  };

  static propTypes = {
    countActiveTask: PropTypes.number,
    // displayActiveTask: PropTypes.func,
    // displayAllTask: PropTypes.func,
    // displayCompletedTask: PropTypes.func,
    clearCompleted: PropTypes.func,
    activeButton: PropTypes.string,
  };

  render() {
    const { countActiveTask, activeButtonFilter, clearCompleted, activeButton } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{countActiveTask} items left</span>
        <TaskFilter
          // displayActiveTask={displayActiveTask}
          // displayAllTask={displayAllTask}
          // displayCompletedTask={displayCompletedTask}
          activeButtonFilter={activeButtonFilter}
          activeButton={activeButton}
        />
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}
