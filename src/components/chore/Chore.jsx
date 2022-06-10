import React from 'react'
import { useTask } from '../../context/task-context';
import "./Chore.css"
import {Link} from 'react-router-dom'

export const Chore = ({task}) => {
  const { taskDispatch } = useTask()
    console.log(task)
    return (
      <div className='chore'>
        <div className='title'>
        <Link to="/timer" key={task._id}>
          <h4>
            {task.title}
            </h4>
        </Link>
        </div>
  
        <div className='icons'>
            <i class="bi bi-pencil-square"
                onClick={() => taskDispatch({ type: "EDIT_TASK", payload: task })}>                
            </i>
            <i class="bi bi-trash3-fill"
                    onClick={() => taskDispatch({ type: "REMOVE_TASK", payload: task._id })}>
            </i>
        </div>
      </div>
    );
  };
