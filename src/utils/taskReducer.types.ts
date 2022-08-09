import { initialStateType, taskType} from "../context/task-context.type";

export interface actionType {
    type: | "TOGGLE_MODAL" | "ADD_TASK" | "REMOVE_TASK" | "EDIT_TASK";
    payload: taskType | string;
}

