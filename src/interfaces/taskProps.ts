export interface TaskProps {
    id: string; // id of task
    name: string; // name of task
    status: TaskStatus; // status of task
    createdAt: string; // date task was created
    requiredBy: string; // date to be completed by
    completed: boolean; // whether task is completed
}

export interface TaskComponentProps extends TaskProps {
    onTaskCompletion: (id: string) => void;
}

export enum TaskStatus {
    DUE = 'due',
    NOT_DUE = 'not due',
    OVERDUE = 'overdue',
}