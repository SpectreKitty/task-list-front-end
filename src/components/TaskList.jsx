import PropTypes from 'prop-types';
import Task from './Task.jsx';
import './TaskList.css';

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  if (tasks.length === 0) {
    return (
      <p className="no-tasks-message">No tasks to display</p>
    );
  }

  const taskComponents = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        isComplete={task.isComplete}
        onCompleteTask={onCompleteTask}
        onDeleteTask={onDeleteTask}
      />);
  });
  return (
    <ul className="tasks__list no-bullet">
      {taskComponents}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
  })
  ).isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;
