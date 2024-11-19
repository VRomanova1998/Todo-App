import './task-list.css';
import Task from './task';

const TaskList = () => {
  return (
    <ul className="todo-list">
    <li className="completed">
      <Task label="Completed task" />
    </li>
    <li className="editing">
    <Task label="Reading task"/>
      <input type="text" className="edit" defaultValue="Editing task" />
    </li>
    <li>
    <Task label="Active task"/>
    </li>
  </ul>
  );
}


export default TaskList;