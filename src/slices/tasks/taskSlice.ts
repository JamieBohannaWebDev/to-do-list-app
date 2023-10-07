import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TaskType } from '../../interfaces/taskType';
import { FilterBy } from '../../interfaces/filterBy';

export interface TaskState {
    tasks: TaskType[];
    filterBy: FilterBy | null;
    sideMenu: {
        isOpen: boolean;
        selectedTask: TaskType | null;
    }
}

const initialState: TaskState = {
    tasks: [],
    filterBy: null,
    sideMenu: {
        isOpen: false,
        selectedTask: null,
    }
};

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TaskType>) => {
            state.tasks.push(action.payload);
        },
        completeTask: (state, action: PayloadAction<{ id: string }>) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index].completed = !state.tasks[index].completed;
            }
        },
        filterBy: (state, action: PayloadAction<FilterBy | null>) => {
            state.filterBy = action.payload;
        },
        editTask: (state, action: PayloadAction<{ id: string }>) => {
            const task = state.tasks.find((task) => task.id === action.payload.id);
            if (task) {
                state.sideMenu.selectedTask = task;
                state.sideMenu.isOpen = true;
            }
        },
        closeSideMenu: (state) => {
            state.sideMenu.isOpen = false;
            state.sideMenu.selectedTask = null;
        },
        saveTask: (state, action: PayloadAction<TaskType>) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },
        deleteTask: (state, action: PayloadAction<{ id: string }>) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            state.tasks.splice(index, 1);
        }
    },
});

export const { addTask, completeTask, editTask, saveTask, deleteTask, closeSideMenu, filterBy } = taskSlice.actions;

export default taskSlice.reducer;