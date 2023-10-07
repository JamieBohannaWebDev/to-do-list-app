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
	const filterBy = useSelector((state: RootState) => state.tasks.filterBy);
	const dispatch = useDispatch();

	const filteredTasks = React.useMemo(() => {
		if (!filterBy) return tasks;

		switch (filterBy) {
			case 'completed':
				return tasks.filter(task => task.completed);
			case 'notdue':
				return tasks.filter(task => task.status === TaskStatus.NOT_DUE);
			case 'due':
				return tasks.filter(task => task.status === TaskStatus.DUE);
			case 'overdue':
				return tasks.filter(task => task.status === TaskStatus.OVERDUE);
			case 'worklist':
				return tasks.filter(task => task.listType === ListTypes.WORK);
			case 'personallist':
				return tasks.filter(task => task.listType === ListTypes.PERSONAL);
			case 'studylist':
				return tasks.filter(task => task.listType === ListTypes.STUDY);
			case 'easytag':
				return tasks.filter(task => task.tag === 'Easy');
			case 'normaltag':
				return tasks.filter(task => task.tag === 'Normal');
			case 'hardtag':
				return tasks.filter(task => task.tag === 'Hard');
			default:
				return tasks;
		}
	}, [tasks, filterBy]);

	const incompleteFilteredTasks = React.useMemo(
		() => filteredTasks.filter(task => !task.completed && (task.status === TaskStatus.DUE || task.status === TaskStatus.OVERDUE)),
		[filteredTasks]
	);

	const completedFilteredTasks = React.useMemo(
		() => filteredTasks.filter(task => task.completed && task.status === TaskStatus.DUE),
		[filteredTasks]
	);
	
	const createNewTask = (value: string) => {
		const newTask = {
			id: uuid(),
			name: value,
			status: TaskStatus.DUE,
			createdAt: new Date().toISOString(),
			requiredBy: new Date().toISOString(),
			completed: false,
			listType: null,
			tag: null
		};

		dispatch(taskSlice.actions.addTask(newTask));
	};

	const completeTask = (id: string) => {
		dispatch(taskSlice.actions.completeTask({ id }));
	};

	const editTask = (id: string) => {
		dispatch(taskSlice.actions.editTask({ id }));
	}


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
					{incompleteFilteredTasks.length}
				</p>
			</header>

			<AddNewInput
				icon={<AddRounded className="text-gray-400" />}
				placeholder="Add new task"
				onEnterEvent={createNewTask}
			/>

			{incompleteFilteredTasks.map(renderTask)}

			{completedFilteredTasks.length > 0 && (
				<h3 className="text-xl font-bold mt-10">Completed</h3>
			)}

			{completedFilteredTasks.map(renderTask)}
		</main>
	);
};

export default ToDoList;
