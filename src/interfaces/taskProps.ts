export interface TaskProps {
    id: number; // id of task
    name: string; // name of task
    status: 'not due' | 'due' | 'overdue' | 'completed'; // status of task
    createdAt: Date; // date task was created
    requiredBy: Date; // date to be completed by
}