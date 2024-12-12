import PropTypes from 'prop-types';
import Task from './Task.jsx';
import './TaskList.css';

const TaskList = ({ taskData, onTaskCompletionToggle }) => {
  const taskComponents = (taskData).map((task) => {
    return (
      <Task
        id={task.id}
        title={task.title}
        isComplete={task.isComplete}
        onTaskCompletionToggle={onTaskCompletionToggle}
        key={task.id}
      />);
  });
  return (
    <ul className="tasks__list no-bullet">
      {taskComponents}
    </ul>
  );
};

TaskList.propTypes = {
  taskData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
  })
  ).isRequired,
  onTaskCompletionToggle: PropTypes.func.isRequired,
};

export default TaskList;
