import { useState, useEffect } from 'react';
import TaskList from './components/TaskList.jsx';
import axios from 'axios';
import './App.css';

const kbaseURL = 'http://localhost:5000';

const convertFromApi = (apiTask) => {
  const newTask = {
    ...apiTask,
	  isComplete: apiTask.is_complete ?? false,
  };
	  delete newTask.is_complete;
	  return newTask;
};

const getAllTasksApi = () => {
  return axios.get(`${kbaseURL}/tasks`)
	  .then( response => {
		  return response.data;
    })
    .catch(error => {
	    console.log(error);
    });
};

const App = () => {
  const [taskData, setTaskData] = useState([]);

  const getAllTasks = () => {
	  getAllTasksApi()
		  .then(tasks => {setTaskData(tasks.map(convertFromApi));
      });
  };

  useEffect(() => {
	  getAllTasks();
  }, []);

  const completeTaskApi = (id, isComplete) => {
    const url = isComplete ? `${kbaseURL}/tasks/${id}/mark_complete`: `${kbaseURL}/tasks/${id}/mark_incomplete`;
    return axios.patch(url)
      .then(response => response.data)
      .catch(error => {
        console.log(error);
      });
  };

  const handleCompleteTask = (id) => {
    const task = taskData.find((task) => task.id === id);
    const newIsComplete = !task.isComplete;
    completeTaskApi(id, newIsComplete)
      .then(() => {
        setTaskData(taskData => taskData.map(task => {
          if (task.id === id) {
            return { ...task, isComplete: newIsComplete};
          } else {
            return task;
          }
        }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleDeleteTask = (id) => {
    setTaskData(taskData => taskData.filter(task => {
      return task.id !== id;
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList
          taskData={taskData}
          onCompleteTask={handleCompleteTask}
          onDeleteTask={handleDeleteTask}
        />}</div>
      </main>
    </div>
  );
};

export default App;
