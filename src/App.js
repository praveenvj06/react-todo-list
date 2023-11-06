
import './App.css';
import { useState } from 'react';
import Task from './component/Task';


function App() {
  const [todolist,settodolist]=useState([])
  const [input,setinput]=useState("");

  const handleinput=(e)=>{
    setinput(e.target.value)
  }
  
  const inputupdate=()=>{
    const task={
      id:todolist.length === 0 ? 1 : todolist[todolist.length-1].id+1,
      taskname:input,
      complete:false
    }
    settodolist([...todolist,task]);
  }

  const deleteitem=(id)=>{
    settodolist(todolist.filter((task)=> task.id !== id))
  }
  const completeitem=(id)=>{
    settodolist(todolist.map((task)=>{
      if (task.id ===id){
        return {...task,complete:true}
      }else{
        return {...task,complete:false}
      }
    }))
  }
  return (
    <div className="App">
      <input type='text' onChange={handleinput}placeholder='enter a event'/>
      <button className='add-btn' onClick={inputupdate}>Add</button>
      {todolist.map((task)=>{
        return(
          <Task 
          deleteitem={deleteitem}
          completeitem={completeitem}
          taskname={task.taskname}
          id={task.id}
          complete={task.complete}/>
        )
      })}
    </div>
  );
}

export default App;
