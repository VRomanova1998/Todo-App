import './footer.css';
import TaskFilter from '../task-filter/tasks-filter';


const Footer = ({activeTask, displayActiveTask, displayAllTask, displayCompletedTask, clearCompleted, activeButton}) => {
//  console.log(this.props.activeTask)
  return (
  <footer className="footer">
    <span className="todo-count">{activeTask} items left</span>
   <TaskFilter displayActiveTask={displayActiveTask}
               displayAllTask={displayAllTask}
               displayCompletedTask={displayCompletedTask}
               activeButton={activeButton}/>
    <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
  </footer>
  );
}

export default Footer;