import React from 'react'
import { useTask } from '../../context/task-context';
import "./Chore.css"

export const Chore = ({task}) => {
  const { taskDispatch } = useTask()
    
    return (
      <div key={task._id} className="chore">
        <div className='title'>
          <h4>
            {task.title}
          </h4>
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
