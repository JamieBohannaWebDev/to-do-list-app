export interface TaskProps {
    id: string; // id of task
    name: string; // name of task
    status: 'not due' | 'due' | 'overdue'; // status of task
    createdAt: Date; // date task was created
    requiredBy: Date; // date to be completed by
    completed: boolean; // whether task is completed
}

export interface TaskComponentProps extends TaskProps {
    onTaskCompletion: (id: string) => void;
}