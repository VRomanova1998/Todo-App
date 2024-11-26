import './tasks-filter.css';

const TaskFilter = ({ displayActiveTask, displayAllTask, displayCompletedTask, activeButton }) => {
  return (
    <ul className="filters">
      <li>
        <button className={activeButton === 'All' ? 'selected' : ''} onClick={displayAllTask}>
          All
        </button>
      </li>
      <li>
        <button className={activeButton === 'Active' ? 'selected' : ''} onClick={displayActiveTask}>
          Active
        </button>
      </li>
      <li>
        <button className={activeButton === 'Completed' ? 'selected' : ''} onClick={displayCompletedTask}>
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TaskFilter;
