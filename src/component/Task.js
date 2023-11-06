import React from 'react'

const Task = (props) => {
  return (
    <div className='out-container' style={{backgroundColor : props.complete ? "green" : "whilte"}}>
            <div className='first-btn' >{props.taskname}</div>
            <button className='center-btn' onClick={()=>(props.deleteitem(props.id))}>x</button>
            <button className='last-btn' onClick={()=>(props.completeitem(props.id))}>Done</button>
          </div>
  )
}

export default Task