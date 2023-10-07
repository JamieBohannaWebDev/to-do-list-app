import React from 'react';
import { AddRounded } from '@mui/icons-material';
import { taskSlice } from '../../slices/tasks/taskSlice';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { TaskType, TaskStatus } from '../../interfaces/taskType';
import AddNewInput from '../atoms/addNewInput';
import Task from '../atoms/task';
import { ListTypes } from '../../interfaces/listType';

const ToDoList = () => {
	const tasks = useSelector((state: RootState) => state.tasks.tasks);
	const dispatch = useDispatch();

	const createNewTask = (value: string) => {
		const newTask = {
			id: uuid(),
			name: value,
			status: TaskStatus.DUE,
			createdAt: new Date().toISOString(),
			requiredBy: new Date().toISOString(),
			completed: false,
			listType: ListTypes.NONE,
			tag: ''
		};

		dispatch(taskSlice.actions.addTask(newTask));
	};

	const completeTask = (id: string) => {
		dispatch(taskSlice.actions.completeTask({ id }));
	};

	const editTask = (id: string) => {
		dispatch(taskSlice.actions.editTask({ id }));
	}

	const incompleteTasks = React.useMemo(
		() => tasks.filter((task) => !task.completed),
		[tasks]
	);
	const completedTasks = React.useMemo(
		() => tasks.filter((task) => task.completed),
		[tasks]
	);

	const renderTask = (task: TaskType) => (
		<Task
			key={task.id}
			id={task.id}
			name={task.name}
			status={task.status}
			createdAt={task.createdAt}
			requiredBy={task.requiredBy}
			completed={task.completed}
			listType={task.listType}
			tag={task.tag}
			onTaskCompletion={completeTask}
			onTaskEdit={editTask}
		/>
	);

	return (
		<main className="flex p-5 w-full flex-col">
			<header className="flex mb-10">
				<h1 className="text-5xl font-bold">Today</h1>
				<p className="font-bold text-4xl border rounded min-w-[50px] mt-2 text-center ml-5">
					{incompleteTasks.length}
				</p>
			</header>

			<AddNewInput
				icon={<AddRounded className="text-gray-400" />}
				placeholder="Add new task"
				onEnterEvent={createNewTask}
			/>

			{incompleteTasks.map(renderTask)}

			{completedTasks.length > 0 && (
				<h3 className="text-xl font-bold mt-10">Completed</h3>
			)}

			{completedTasks.map(renderTask)}
		</main>
	);
};

export default ToDoList;
