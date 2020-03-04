import React, {useState, useRef, useEffect} from 'react';
import TaskList from './TaskList';
import uuidv4 from 'uuid/v4'

function App() {
  const taskStorageKey = "8vfd09-taskList";
  const [taskList, setTaskList] = useState([]);
  const taskNameRef = useRef();

  useEffect(() => {
    let storedVal = localStorage.getItem(taskStorageKey);
    if (storedVal) setTaskList(JSON.parse(storedVal));
  }, []);

  useEffect(() => {
    localStorage.setItem(taskStorageKey, JSON.stringify(taskList));
  }, [taskList]);

  function toggleChecked(id) {
    let newList = [...taskList];
    
    newList.forEach(o => {
      if (o.id === id) {
        o.done = !o.done;
      }
    });

    setTaskList(newList);
  }

  function clearAllSelected(e) {
    setTaskList(taskList.filter(t => !t.done))
  }

  function addTask(e) {
    let name = taskNameRef.current.value;
    if (name === '') return;
    setTaskList([...taskList, {id: uuidv4(), name: name, done:false}]);
    taskNameRef.current.value = '';
  }

  return (
    <div>
      <TaskList tasks={taskList} toggleChecked={toggleChecked}/>
      <input ref={taskNameRef} type="text" />
      <button onClick={addTask}>Add a task</button>
      <button onClick={clearAllSelected}>Remove selected tasks</button>
    </div>
  );
}

export default App;
