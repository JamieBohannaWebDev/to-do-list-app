import React from 'react';
import MenuItem from '../atoms/menuItem';
import {
	CheckCircleRounded,
	WatchLaterRounded,
	TodayRounded,
	ReportProblemRounded,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { TaskStatus } from '../../interfaces/taskType';

const TaskMenu = () => {
	const tasks = useSelector((state: RootState) => state.tasks.tasks);

	const overdueTasks = React.useMemo(
		() =>
			tasks.filter(
				(task) => !task.completed && task.status === TaskStatus.OVERDUE
			),
		[tasks]
	);

	const incompleteTasksForToday = React.useMemo(
		() =>
			tasks.filter((task) => !task.completed && task.status === TaskStatus.DUE),
		[tasks]
	);

	const upcomingTasks = React.useMemo(
		() =>
			tasks.filter(
				(task) => !task.completed && task.status === TaskStatus.NOT_DUE
			),
		[tasks]
	);

	const completedTasks = React.useMemo(
		() => tasks.filter((task) => task.completed),
		[tasks]
	);

	const handleItemClick = () => {
		console.log('Item clicked!');
	};
	return (
		<div className="mb-10">
			<h3 className="mb-2 text-xs font-semibold uppercase">Tasks</h3>
			<MenuItem
				icon={
					<ReportProblemRounded
						color={overdueTasks.length > 0 ? 'error' : 'success'}
					/>
				}
				label={'Overdue'}
				value={overdueTasks.length}
				onClickEvent={handleItemClick}
			/>

			<MenuItem
				icon={<TodayRounded color={incompleteTasksForToday.length > 0 ? 'secondary' : 'success'} />}
				label={'Due Today'}
				value={incompleteTasksForToday.length}
				onClickEvent={handleItemClick}
			/>

			<MenuItem
				icon={<WatchLaterRounded color={upcomingTasks.length > 0 ? 'info' : 'success'} />}
				label={'Upcoming'}
				value={upcomingTasks.length}
				onClickEvent={handleItemClick}
			/>

			<MenuItem
				icon={<CheckCircleRounded color="success" />}
				label={'Completed'}
				value={completedTasks.length}
				onClickEvent={handleItemClick}
			/>
		</div>
	);
};

export default TaskMenu;
