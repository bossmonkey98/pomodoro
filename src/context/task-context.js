import { createContext, useContext, useEffect, useReducer } from "react";
import { taskReducer } from "../utils/taskReducer";
const TaskContext = createContext()

const useTask = () => useContext(TaskContext)

const TaskProvider = ({ children }) => {
  const taskListFromLocal = JSON.parse(localStorage.getItem("taskList"));
  const initialState = {
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