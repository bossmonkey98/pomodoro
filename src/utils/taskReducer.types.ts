import { taskType} from "../context/task-context.type";

export type actionType = | {
    type: string;
    payload: taskType | string;
}

