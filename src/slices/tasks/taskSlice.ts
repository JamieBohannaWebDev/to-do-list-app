import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TaskProps } from '../../interfaces/taskProps';

export interface TaskState {
    tasks: TaskProps[];
}

const initialState: TaskState = {
    tasks: [],
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
        editTask: (state, action: PayloadAction<TaskProps>) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            state.tasks[index] = action.payload;
        },
    },
});

export const { addTask, completeTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;