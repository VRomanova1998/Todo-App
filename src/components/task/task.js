import React, {Component} from 'react';
import './task.css'

export default class Task extends Component {

  state = {
    done: false
  }

  onTaskClick= ()=>{
    this.setState(({done})=>{
      return {
        done: !done
      }
    })
  }

  render(){
    const { label, onDeleteTask } = this.props;
    const { done } = this.state;
    
    let className = '';
    if (done) {
      className += ' description';
    }

    return (
      <div className="view">
            <input className="toggle" type="checkbox" onClick={this.onTaskClick} />
            <label>
              <span className={className}>{label}</span>
              <span className="created">created 17 seconds ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy" onClick={onDeleteTask}></button>
          </div>
    );
  }
}
