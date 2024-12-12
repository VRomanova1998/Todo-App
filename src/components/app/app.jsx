import React, { Component } from 'react';

import Footer from '../footer/footer';
import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import './app.css';

export default class App extends Component {
  generateId = 10;

  state = {
    todoData: [],
    activeButton: 'All',
  };

  createTask(label) {
    return {
      label,
      done: false,
      id: this.generateId++,
      hidden: false,
    };
  }

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      let newArray = todoData.filter((item) => {
        return item.id !== id;
      });
      return {
        todoData: newArray,
      };
    });
  };

  addTask = (text) => {
    this.setState(({ todoData }) => {
      const newTask = this.createTask(text);
      const newTodoData = [...todoData, newTask];
      return {
        todoData: newTodoData,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const indexTask = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[indexTask];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArr = [...todoData.slice(0, indexTask), newItem, ...todoData.slice(indexTask + 1)];
      return {
        todoData: newArr,
      };
    });
  };

  activeButtonFilter = (e) => {
    let newArr = [];
    for (let item of this.state.todoData) {
      let newItem = { ...item };
      switch (e.target.textContent) {
        case 'All':
          newItem.hidden = false;
          break;
        case 'Active':
          newItem.hidden = item.done ? true : false;
          break;
        case 'Completed':
          newItem.hidden = !item.done ? true : false;
          break;
      }
      newArr.push(newItem);
    }
    this.setState(() => {
      return {
        todoData: newArr,
        activeButton: e.target.textContent,
      };
    });
  };

  clearCompleted = () => {
    for (let item of this.state.todoData) {
      if (item.done) this.deleteTask(item.id);
    }
  };

  editAdd = (text, id) => {
    this.setState(({ todoData }) => {
      const indx = todoData.findIndex((el) => el.id === id);
      const newArr = todoData.toSpliced(indx, 1, { ...todoData[indx], label: text });
      return {
        todoData: newArr,
      };
    });
  };

  render() {
    const countActiveTask = this.state.todoData.filter((item) => {
      return !item.done;
    }).length;
    return (
      <section className="todoapp">
        <NewTaskForm onAddTask={this.addTask} />
        <section className="main">
          <TaskList
            todos={this.state.todoData}
            onDeleteTask={this.deleteTask}
            onToggleDone={this.onToggleDone}
            editAdd={this.editAdd}
          />
          <Footer
            countActiveTask={countActiveTask}
            activeButton={this.state.activeButton}
            activeButtonFilter={this.activeButtonFilter}
            clearCompleted={this.clearCompleted}
          />
        </section>
      </section>
    );
  }
}
