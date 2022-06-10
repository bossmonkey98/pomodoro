import React from 'react'
import "./Task.css"
import Modal from "../../components/modal/Modal"
import { useTask } from '../../context/task-context'
import {Chore} from "../../components/chore/Chore"

const Task = () => {
  const {taskState ,taskDispatch} = useTask()
  return (
      <div className='task'>
          <h1 style={{margin:"12px"}}>Welcome, User</h1>
          <p style={{margin:"12px"}}>Let's start</p>
          <div className='task-container'>
            <header style={{display:"flex"}}>
                <h2 className='task-list'>Tasks</h2>
              <div className='add-task'>
                <i class="bi bi-plus-square-fill"
                  onClick={() => taskDispatch({ type: "TOGGLE_MODAL" })}></i>
              </div>
            </header>
        {taskState.showModal && <Modal />}
        <div className='chore-list'>
              {taskState.taskList.length !== 0 && 
          taskState.taskList.map((task) =>
            <Chore task={task} />)
          }
        </div>
          </div>
      </div>
  )
}

export { Task }