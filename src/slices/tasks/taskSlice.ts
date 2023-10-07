import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TaskProps } from '../../interfaces/taskProps';

export interface TaskState {
    tasks: TaskProps[];
    sideMenu: {
        isOpen: boolean;
        selectedTask: TaskProps | null;
    }
}

const initialState: TaskState = {
    tasks: [],
    sideMenu: {
        isOpen: false,
        selectedTask: null,
    }
};

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TaskProps>) => {
            state.tasks.push(action.payload);
        },
        completeTask: (state, action: PayloadAction<{ id: string }>) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index].completed = !state.tasks[index].completed;
            }
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
        saveTask: (state, action: PayloadAction<TaskProps>) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            state.tasks[index] = action.payload;
        },
        deleteTask: (state, action: PayloadAction<{ id: string }>) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            state.tasks.splice(index, 1);
        }
    },
});

export const { addTask, completeTask, editTask, saveTask, deleteTask, closeSideMenu } = taskSlice.actions;

export default taskSlice.reducer;