import React from 'react';
import { v4 as uuid } from 'uuid';
import { Divider } from '@mui/material';
import { AddRounded } from '@mui/icons-material';
import { TaskProps } from '../../interfaces/taskProps';
import AddNewInput from '../atoms/addNewInput';
import Task from '../atoms/task';

const ToDoList = () => {
	const [tasks, setTasks] = React.useState<TaskProps[]>([]);

	const createNewTask = (value: string) => {
		setTasks([
			...tasks,
			{
				id: uuid(),
				name: value,
				status: 'due',
				createdAt: new Date(),
				requiredBy: new Date(),
				completed: false,
			},
		]);
	};

	const incompleteTasks = React.useMemo(
		() => tasks.filter((task) => !task.completed),
		[tasks]
	);
	const completedTasks = React.useMemo(
		() => tasks.filter((task) => task.completed),
		[tasks]
	);

	const completeTask = (id: string) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				return { ...task, completed: !task.completed };
			}
			return task;
		});

		setTasks(updatedTasks);
	};

	return (
		<main className="flex p-5 w-full flex-col">
			<div className="flex mb-10">
				<h1 className="text-5xl font-bold">Today</h1>
				<p className="font-bold text-4xl border rounded min-w-[50px] mt-2 text-center ml-5">
					{tasks.filter((task) => !task.completed).length}
				</p>
			</div>

			<AddNewInput
				icon={<AddRounded />}
				placeholder="Add new task"
				onEnterEvent={createNewTask}
			/>
			{incompleteTasks.map((task) => (
				<Task
					key={task.id}
					id={task.id}
					name={task.name}
					status={task.status}
					createdAt={task.createdAt}
					requiredBy={task.requiredBy}
					completed={task.completed}
					onTaskCompletion={completeTask}
				/>
			))}
			{completedTasks.length > 0 && <h3 className="text-xl font-bold mt-10">Completed</h3>}

			{completedTasks.map((task) => (
				<Task
					key={task.id}
					id={task.id}
					name={task.name}
					status={task.status}
					createdAt={task.createdAt}
					requiredBy={task.requiredBy}
					completed={task.completed}
					onTaskCompletion={completeTask}
				/>
			))}
		</main>
	);
};

export default ToDoList;
