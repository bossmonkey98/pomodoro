import React from 'react'
import { useTask } from '../../context/task-context';
import "./Chore.css"
import { Link } from 'react-router-dom'
import { taskType } from '../../context/task-context.type';

export const Chore: React.FC<{ task: taskType }> = ({ task}) => {
  const { taskDispatch } = useTask()
  return (
    <div className='chore'>
      <div className='title'>
        <Link to={`/timer/${task?._id}`} key={task?._id}>
          <h4>
            {task.title}
          </h4>
        </Link>
      </div>

      <div className='icons'>
        <i className="bi bi-pencil-square"
          onClick={() => taskDispatch({ type: "EDIT_TASK", payload: task })}>
        </i>
        <i className="bi bi-trash3-fill"
          onClick={() => taskDispatch({ type: "REMOVE_TASK", payload: task._id })}>
        </i>
      </div>
    </div>
  );
};
