import React, {Component} from 'react';
import Footer from '../footer/footer';
import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';

export default class App extends Component {

    state = {
        todoData: [
        {label: 'Completed task', important: false, id: 1},
        {label: 'Reading task', important: false, id: 2},
        {label: 'Active task', important: false, id: 3}
    ]
    };
    
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

    render(){
        return (
        <section className="todoapp">
  <NewTaskForm />
  <section className="main">
    <TaskList todos={this.state.todoData} onDeleteTask={this.deleteTask} />
    <Footer />
  </section>
</section>
    ); 
    }
   
}
