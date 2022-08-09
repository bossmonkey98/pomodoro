import React from "react";

export type taskType = any | {
    _id: string;
    title: string;
    desc: string;
    time: Number;
    breakTime: Number;
}

export interface initialStateType {
    taskList: | taskType[];
    showModal: boolean;
    showTimer: boolean;
    taskToEdit: undefined | taskType;
}

export interface Props{
    children:React.ReactNode
}