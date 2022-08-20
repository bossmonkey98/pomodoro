import React, { createContext, useContext, useEffect, useReducer } from "react";
import { taskReducer } from "../utils/taskReducer";
import { initialStateType ,Props } from "./task-context.type";

const TaskContext = createContext<any | null>(null)

const useTask = () => useContext(TaskContext)

const TaskProvider: React.FC<Props> = ({ children }) => {
  // @ts-ignore
  const taskListFromLocal = JSON.parse(localStorage.getItem("taskList"));
  const initialState:initialStateType = {
    taskList: taskListFromLocal || [],
    showModal: false,
    showTimer: false,
    taskToEdit: {},
  };

  const [taskState, taskDispatch] = useReducer(
    taskReducer as any,
    initialState
  );

  useEffect(() => {
    // @ts-ignore
    localStorage.setItem("taskList", JSON.stringify(taskState.taskList));
    // @ts-ignore
  }, [taskState.taskList]);



  return (
    <TaskContext.Provider value={{ taskState, taskDispatch }}>
      {children}
    </TaskContext.Provider>
  )
}


export { useTask, TaskProvider }