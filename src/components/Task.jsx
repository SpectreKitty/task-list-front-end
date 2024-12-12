// import { useState } from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = ({
  id,
  title,
  isComplete,
  onTaskCompletionToggle,
}) => {
  // const [complete, setComplete] = useState(isComplete);
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  const onCompletionClick = () => {
    onTaskCompletionToggle(id);
  };

  return (
    <li className="tasks__item">
      <button className={`tasks__item__toggle ${buttonClass}`} onClick={onCompletionClick}>{title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onTaskCompletionToggle: PropTypes.func.isRequired,
};

export default Task;
