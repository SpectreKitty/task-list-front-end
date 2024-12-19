import { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ handleSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = event => {
    // console.log('Title changed to:', event.target.value);
    setTitle(event.target.value);
  };
  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };
  const onHandleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      title, description,
    };
    handleSubmit(newTask);
    setTitle('');
    setDescription('');
  };
  return (
    <form onSubmit={onHandleSubmit}>
      <label htmlFor="title">Task Title: </label>
      <input type="text" id="title" name="title" value={title} onChange={handleTitleChange} />
      <label htmlFor="description">Task Description: </label>
      <input type="text" id="description" name="description" value={description} onChange={handleDescriptionChange}/>
      <div>
        <input type="submit" value="Add a task"></input>
      </div>
    </form>
  );
};
NewTaskForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default NewTaskForm;