import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

const isComplete = 'is_complete';
const kDefaultFormState = {
  title: '',
  description: '',
  [isComplete]: false,
};

const NewTaskForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState(kDefaultFormState);

  const handleChange = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...formData, [fieldName]: fieldValue };
    setFormData(newFormData);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    setFormData(kDefaultFormState);
  };

  return (
    <form className="formData" onSubmit={onHandleSubmit}>
      <label htmlFor="title">Task Title: </label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label htmlFor="description">Task Description: </label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
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