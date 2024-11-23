import React, {Component} from 'react';
import Footer from '../footer/footer';
import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import './app.css';

export default class App extends Component {

generateId = 10;

state = {
    todoData: [
        this.createTask('Completed task'),
        this.createTask('Reading task'),
        this.createTask('Active task')
    ],
    activeButton: 'All'
};

createTask(label){
    return {
        label,
        done: false,
        id: this.generateId++,
        hidden: false
    }
}

deleteTask = (id) => {
    this.setState(({todoData})=>{
    let newArray = todoData.filter((item)=>{
        return item.id !== id;
    });
    return {
      todoData: newArray
    } 
    })
}

addTask = (text) => {      
    this.setState (({ todoData }) => { 
        const newTask = this.createTask(text);
        const newTodoData = [...todoData, newTask];
    return {
          todoData: newTodoData 
        } 
    });
}

onToggleDone = (id) => {
this.setState(({ todoData })=>{
    const indexTask = todoData.findIndex((el)=>el.id === id);
    const oldItem = todoData[indexTask];
    const newItem = {...oldItem, done: !oldItem.done}
    const newArr = [
        ...todoData.slice(0, indexTask),
        newItem,
        ...todoData.slice(indexTask+1)
    ];
    return {
        todoData: newArr
    }
})
}

displayActiveTask = () => {
    let newArr = [];
    for (let item of this.state.todoData) {
        if (item.done) {
            let newItem = {...item, hidden: true}
            newArr.push(newItem)
        } else {
            let newItem = {...item, hidden: false};
            newArr.push(newItem)
        }
    }
    this.setState(()=>{
        return {
            todoData: newArr,
            activeButton: 'Active'
        }
    })
}

displayAllTask = () => {
    let newArr = [];
    for (let item of this.state.todoData) {
            let newItem = {...item, hidden: false}
            newArr.push(newItem) 
    }
    this.setState(()=>{
        return {
            todoData: newArr,
            activeButton: 'All'
        }
    })
}

displayCompletedTask = () => {
    let newArr = [];
    for (let item of this.state.todoData) {
        if (!item.done) {
            let newItem = {...item, hidden: true}
            newArr.push(newItem)
        } else {
            let newItem = {...item, hidden: false};
            newArr.push(newItem)
        }
    }
    this.setState(()=>{
        return {
            todoData: newArr,
            activeButton: 'Completed'
        }
    })
}

clearCompleted = () => {
    for (let item of this.state.todoData) {
 if (item.done) this.deleteTask(item.id);
    }
}

render(){
    const activeTask = this.state.todoData.filter((item)=>{return !item.done}).length;
        return (
        <section className="todoapp">
          <NewTaskForm  onAddTask={this.addTask} />
            <section className="main">
                <TaskList todos={this.state.todoData} 
                          onDeleteTask={this.deleteTask}
                          onToggleDone={this.onToggleDone} />
                <Footer activeTask={activeTask} 
                        activeButton={this.state.activeButton}
                        displayActiveTask={this.displayActiveTask}
                        displayAllTask={this.displayAllTask}
                        displayCompletedTask={this.displayCompletedTask}
                        clearCompleted={this.clearCompleted} />
            </section>
        </section>
    ); 
    }
}
