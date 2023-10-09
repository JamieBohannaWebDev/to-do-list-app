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
	const [title, setTitle] = React.useState<string>('Tasks Due Today');
	const tasks = useSelector((state: RootState) => state.tasks.tasks);
	const filterBy = useSelector((state: RootState) => state.tasks.filterBy);
	const dispatch = useDispatch();

	const filteredTasks = React.useMemo(() => {
		if (!filterBy) return tasks;

		switch (filterBy) {
			case 'completed':
				setTitle('Completed Tasks');
				return tasks.filter(task => task.completed);
			case 'not due':
				setTitle('Upcoming Tasks');
				return tasks.filter(task => task.status === TaskStatus.NOT_DUE);
			case 'due':
				setTitle('Tasks Due Today');
				return tasks.filter(task => (task.status === TaskStatus.DUE || task.status === TaskStatus.OVERDUE));
			case 'overdue':
				setTitle('Overdue Tasks');
				return tasks.filter(task => task.status === TaskStatus.OVERDUE);
			case 'work list':
				setTitle('Work List Tasks');
				return tasks.filter(task => task.listType === ListTypes.WORK);
			case 'personal list':
				setTitle('Personal List Tasks');
				return tasks.filter(task => task.listType === ListTypes.PERSONAL);
			case 'study list':
				setTitle('Study List Tasks');
				return tasks.filter(task => task.listType === ListTypes.STUDY);
			case 'easy tag':
				setTitle('Easy Tag Tasks');
				return tasks.filter(task => task.tag === 'Easy');
			case 'normal tag':
				setTitle('Normal Tag Tasks');
				return tasks.filter(task => task.tag === 'Normal');
			case 'hard tag':
				setTitle('Hard Tag Tasks');
				return tasks.filter(task => task.tag === 'Hard');
			default:
				setTitle('Woohoo, you found a bug!');
				return tasks;
		}
	}, [tasks, filterBy]);

	const incompleteFilteredTasks = React.useMemo(
		() => filteredTasks.filter(task => !task.completed),
		[filteredTasks]
	);

	const incompleteUpcomingTasks = React.useMemo(
		() => filteredTasks.filter(task => !task.completed && task.status === TaskStatus.NOT_DUE),
		[filteredTasks]
	);

	const completedFilteredTasks = React.useMemo(
		() => filteredTasks.filter(task => task.completed),
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

	const taskLengthHelper = React.useMemo(() => {
		if (filterBy === 'not due') return incompleteUpcomingTasks.length;
		if (filterBy === 'completed') return completedFilteredTasks.length;
		return incompleteFilteredTasks.length;
	}, [filterBy, incompleteFilteredTasks.length, incompleteUpcomingTasks.length, completedFilteredTasks.length]);

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
				<h1 className="text-5xl font-bold">{title}</h1>
				<p className="font-bold text-4xl border rounded min-w-[50px] mt-2 text-center ml-5">
					{taskLengthHelper}
				</p>
			</header>

			<AddNewInput
				icon={<AddRounded className="text-gray-400" />}
				placeholder="Add new task"
				onEnterEvent={createNewTask}
			/>

			{filterBy === 'not due' ? incompleteUpcomingTasks.map(renderTask) : incompleteFilteredTasks.map(renderTask)}

			{completedFilteredTasks.length > 0 && (
				<h3 className="text-xl font-bold mt-10">Completed</h3>
			)}

			{completedFilteredTasks.map(renderTask)}
		</main>
	);
};

export default ToDoList;
