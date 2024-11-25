import React, { Component } from 'react';
import './task-list.css';
import Task from '../task/task';
import PropTypes from 'prop-types';

export default class TaskList extends Component {

  static defaultProps = {
    onDeleteTask: () => {},
    onToggleDone: () => {},
    todos: []
  }

  static propTypes = {
    onDeleteTask: PropTypes.func,
    onToggleDone: PropTypes.func,
    todos: PropTypes.arrayOf(PropTypes.object)
  }
render(){
  const { todos, onDeleteTask, onToggleDone} = this.props;

  const elements = todos.map((item)=>{
      return (
        <Task label={item.label} 
              onDeleteTask={()=>onDeleteTask(item.id)}
              onToggleDone={()=>onToggleDone(item.id)}
              done={item.done}
              key={item.id}
              id={item.id}
              hidden={item.hidden}/>
      );
  })

return (
    <ul className="todo-list">
{elements}
  </ul>
  );
}

}
