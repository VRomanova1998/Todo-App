import './task-list.css';
import Task from '../task/task';

const TaskList = ({ todos, onDeleteTask, onToggleDone, hidden}) => {

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


export default TaskList;