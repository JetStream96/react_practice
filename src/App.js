import React, {useState, useRef, useEffect} from 'react';
import TaskList from './TaskList';

function App() {
  const taskStorageKey = "8vfd09-taskList";
  const [taskList, setTaskList] = useState([]);
  const taskNameRef = useRef();

  useEffect(() => {
    let storedVal = localStorage.getItem(taskStorageKey);
    if (storedVal) setTaskList(JSON.parse(storedVal));
  }, []);

  useEffect(() =>{
    localStorage.setItem(taskStorageKey, JSON.stringify(taskList));
  }, [taskList]);

  function toggleChecked() {
    
  }

  function addTask(e) {
    let name = taskNameRef.current.value;
    if (name === '') return;
    setTaskList([...taskList,{id: 1, name: name, done:false}]);
    taskNameRef.current.value = '';
  }

  return (
    <>
      <TaskList tasks={taskList} />
      <input ref={taskNameRef} type="text" />
      <button onClick={addTask}>Add a task</button>
      <button>Remove selected tasks</button>
    </>
  );
}

export default App;
