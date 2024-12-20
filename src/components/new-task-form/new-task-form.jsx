import React, { Component } from 'react';
import './new-task-form.css';

class NewTaskForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState(() => {
      return {
        label: e.target.value,
      };
    });
  };

  onSubmit = (e) => {
    if (e.key === 'Enter') {
      this.props.onAddTask(this.state.label);
      this.setState({
        label: '',
      });
    }
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onLabelChange}
          onKeyDown={this.onSubmit}
          value={this.state.label}
        />
      </header>
    );
  }
}

export default NewTaskForm;
