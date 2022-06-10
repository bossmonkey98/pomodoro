import React, {useState} from 'react'
import "./Modal.css"
import { useTask } from '../../context/task-context'
import {v4 as uuid} from "uuid"

const Modal = () => {
  const {taskState, taskDispatch } = useTask()
  const [taskData, setTaskData] = useState(
    taskState.taskToEdit._id
    ? taskState.taskToEdit
    : {
        _id: uuid(),
        title: "",
        desc: "",
        time: 25,
        breakTime: 5,
      }
);
    return (
      <div className='modal'>
        <form className='modal-content' onSubmit={(e) => {
          e.preventDefault();
          taskDispatch({ type: "ADD_TASK", payload: taskData })
        }
        } >
          
          <input type="text" placeholder='Enter Title' onChange={(e) => {
            e.preventDefault();
            setTaskData({ ...taskData, title: e.target.value })
          }} required />
          
          <input type="text" placeholder='Enter description' onChange={(e) => {
            e.preventDefault();
            setTaskData({...taskData,desc:e.target.value})
          }} />

          <input type="number" placeholder='enter time in minutes' onChange={(e) => {
            e.preventDefault();
            setTaskData({...taskData,time:e.target.value})
          }}/>
          <div className='break'>
            <h3>Break</h3>
            <div className='break-type'>
              <div className='short-break'>
                <input className='short' name='break' type="radio"
                  onChange={(e) => setTaskData({ ...taskData, breakTime: 5 })} />
                <span>Short</span>
              </div>
              <div className='short-break'>
                <input className='short' name='break' type="radio"
                  onChange={(e) => setTaskData({ ...taskData, breakTime: 10 })} />
                <span>Long</span>
              </div>
            </div>
          </div>
          <div>
            <button className='btn' type='submit'>Add Task</button>
            <button className='btn' onClick={() =>taskDispatch({ type: "TOGGLE_MODAL" })}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }

export default Modal