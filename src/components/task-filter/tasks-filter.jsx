import './tasks-filter.css';

const TaskFilter = ({ activeButtonFilter, activeButton }) => {
  return (
    <ul className="filters">
      <li>
        <button className={activeButton === 'All' ? 'selected' : ''} onClick={activeButtonFilter}>
          All
        </button>
      </li>
      <li>
        <button className={activeButton === 'Active' ? 'selected' : ''} onClick={activeButtonFilter}>
          Active
        </button>
      </li>
      <li>
        <button className={activeButton === 'Completed' ? 'selected' : ''} onClick={activeButtonFilter}>
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TaskFilter;
