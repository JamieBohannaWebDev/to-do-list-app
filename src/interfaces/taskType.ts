import { ListTypes } from "./listType";

export interface TaskType {
    id: string; // id of task
    name: string; // name of task
    status: TaskStatus; // status of task
    createdAt: string; // date task was created
    requiredBy: string; // date to be completed by
    completed: boolean; // whether task is completed
    listType: ListTypes | null; // lists task belongs to
    tag: string | null; // tag of task
}

export interface TaskComponentProps extends TaskType {
    onTaskCompletion: (id: string) => void;
    onTaskEdit: (id: string) => void;
}

export enum TaskStatus {
    DUE = 'due',
    NOT_DUE = 'not due',
    OVERDUE = 'overdue',
}