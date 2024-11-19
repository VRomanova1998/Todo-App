import './task-list.css';
import Task from '../task/task';

const TaskList = ({ todos, onDeleteTask }) => {

  const elements = todos.map((item)=>{
      return (
        <li className='completed' key={item.id}>
        <Task label={item.label} onDeleteTask={()=>onDeleteTask(item.id)} />
      </li>
      );
  })


return (
    <ul className="todo-list">
{elements}
  </ul>
  );
}


export default TaskList;