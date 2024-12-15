import React, { Component } from 'react';
import './new-task-form.css';

class NewTaskForm extends Component {
  state = {
    label: '',
    Min: '',
    Sec: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onChangeTime = (e) => {
    const isValidData = /^\d+$/.test(e.target.value);
    if (!isValidData && e.target.value !== '') {
      alert('Вводимые данные должны быть числом');
    } else {
      this.setState({
        [e.target.placeholder]: e.target.value,
      });
    }
  };

  onSubmit = (e) => {
    if (this.state.label === '' || this.state.Min === '' || this.state.Sec === '') {
      alert('Заполните все данные');
    } else {
      e.preventDefault();
      this.props.onAddTask(this.state.label, this.state.Min, this.state.Sec);
      this.setState({
        label: '',
        Min: '',
        Sec: '',
      });
    }
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={this.onLabelChange}
            value={this.state.label}
          />
          <input
            className="new-todo-form__timer"
            placeholder="Min"
            autoFocus
            onChange={this.onChangeTime}
            value={this.state.Min}
          />
          <input
            className="new-todo-form__timer"
            placeholder="Sec"
            autoFocus
            onChange={this.onChangeTime}
            value={this.state.Sec}
          />
          <button type="submit"></button>
        </form>
      </header>
    );
  }
}

export default NewTaskForm;
