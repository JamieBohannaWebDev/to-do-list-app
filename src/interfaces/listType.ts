import { TaskType } from "./taskType";

export interface List {
    listName: string;
    listType: ListTypes;
    tasksInList: TaskType[];
}

export enum ListTypes {
    NONE = 'None',
    WORK = 'Work List',
    PERSONAL = 'Personal List',
    STUDY = 'Study List'
}