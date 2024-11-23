
import './task.css'

const Task = ({ label, onDeleteTask, onToggleDone, done, id, hidden}) => {
   let className = '';
    if (done) {
      className += ' completed';
    }
    if (hidden) {
      className += ' hidden'
    } 
    return (
      <li className={className} id={id}>
      <div className="view">
            <input className="toggle" type="checkbox" onClick={onToggleDone} />
            <label>
              <span className='description'>{label}</span>
              <span className="created">created 17 seconds ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy" onClick={onDeleteTask}></button>
          </div>
          </li>
    );
  }


export default Task;