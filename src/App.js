import logo from './logo.svg';
import './App.css';
import Task from './components/TodoTaskAdd';
import List from './components/TodoList'
import { useState } from 'react';

function App() {
  const [listOfTasks, setTasks] = useState([])
  const addTask = myTask => {
    setTasks([...listOfTasks, myTask]);
  }
  const updateTaskStat = index => {
    listOfTasks[index].completed = !listOfTasks[index].completed;
    setTasks([...listOfTasks]);
  }
  const deleteTask = index => {
    setTasks([...listOfTasks.slice(0, index), ...listOfTasks.slice(index+1)])
  }
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Task newTask={addTask}/>
      <List myTask={listOfTasks} updateTaskStat={updateTaskStat} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
