import React from 'react';
import MenuItem from '../atoms/menuItem';
import {
	CheckCircleRounded,
	WatchLaterRounded,
	TodayRounded,
	ReportProblemRounded,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { TaskStatus } from '../../interfaces/taskType';
import { FilterBy } from '../../interfaces/filterBy';
import { taskSlice } from '../../slices/tasks/taskSlice';

const TaskMenu = () => {
	const tasks = useSelector((state: RootState) => state.tasks.tasks);
	const dispatch = useDispatch();

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

	const handleItemClick = (filterType: FilterBy | null) => {
		dispatch(taskSlice.actions.filterBy(filterType));
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
				onClickEvent={() => handleItemClick(FilterBy.OVERDUE)}
			/>

			<MenuItem
				icon={<TodayRounded color={incompleteTasksForToday.length > 0 ? 'secondary' : 'success'} />}
				label={'Due Today'}
				value={incompleteTasksForToday.length}
				onClickEvent={() => handleItemClick(null)}
			/>

			<MenuItem
				icon={<WatchLaterRounded color={upcomingTasks.length > 0 ? 'info' : 'success'} />}
				label={'Upcoming'}
				value={upcomingTasks.length}
				onClickEvent={() => handleItemClick(FilterBy.NOTDUE)}
			/>

			<MenuItem
				icon={<CheckCircleRounded color="success" />}
				label={'Completed'}
				value={completedTasks.length}
				onClickEvent={() => handleItemClick(FilterBy.COMPLETED)}
			/>
		</div>
	);
};

export default TaskMenu;
