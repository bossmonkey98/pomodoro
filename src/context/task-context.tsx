import React, { createContext, useContext, useEffect, useReducer } from "react";
import { taskReducer } from "../utils/taskReducer";
import { initialStateType ,Props } from "./task-context.type";

const TaskContext = createContext<any | null>(null)

const useTask = () => useContext(TaskContext)

const TaskProvider: React.FC<Props> = ({ children }) => {
  const taskListFromLocal = JSON.parse(localStorage.getItem("taskList") || '');
  const initialState:initialStateType = {
    taskList: taskListFromLocal || [],
    showModal: false,
    showTimer: false,
    taskToEdit: {},
  };

  const [taskState, taskDispatch] = useReducer(
    taskReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskState.taskList));
  }, [taskState.taskList]);



  return (
    <TaskContext.Provider value={{ taskState, taskDispatch }}>
      {children}
    </TaskContext.Provider>
  )
}


export { useTask, TaskProvider }