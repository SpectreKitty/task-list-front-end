import { useState } from 'react';
import TaskList from './components/TaskList.jsx';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [taskData, setTaskData] = useState(TASKS);

  const handleCompleteTask = (id) => {
    console.log(`we completed task ${id}`);
    setTaskData(taskData => taskData.map(task => {
      if (task.id === id) {
        return {...task, isCompleteTask: !task.isComplete};
      } else {
        return task;
      }
    }));
  };

  // const isComplete = handleCompleteTask(taskData);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList taskData={taskData} onTaskCompletionToggle={handleCompleteTask} />}</div>
      </main>
    </div>
  );
};

export default App;
