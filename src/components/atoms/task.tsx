import React from 'react';
import { Checkbox, Divider } from '@mui/material';
import { TaskComponentProps, TaskStatus } from '../../interfaces/taskType';
import MenuTag from './menuTag';
import MenuItem from './menuItem';
import { ListTypes } from '../../interfaces/listType';
import { SquareRounded } from '@mui/icons-material';
import { FilterBy } from '../../interfaces/filterBy';
import { useDispatch } from 'react-redux';
import { taskSlice } from '../../slices/tasks/taskSlice';

const Task = ({
	id,
	name,
	status,
	createdAt,
	requiredBy,
	completed,
	listType,
	tag,
	onTaskCompletion,
	onTaskEdit,
}: TaskComponentProps) => {
	const dispatch = useDispatch();

	const handleChange = () => {
		onTaskCompletion(id);
	};

	const handleEdit = () => {
		onTaskEdit(id);
	};

	const handleTagClick = (filterType: FilterBy) => {
		dispatch(taskSlice.actions.filterBy(filterType));
	};

	const handleListClick = (filterType: FilterBy) => {
		dispatch(taskSlice.actions.filterBy(filterType));
	};

	const calculateMenuColor = React.useMemo(() => {
		switch (tag) {
			case 'Easy':
				return 'success';
			case 'Normal':
				return 'info';
			case 'Hard':
				return 'error';
			default:
				return 'default';
		}
	}, [tag]);

	const calculateListIcon = React.useMemo(() => {
		switch (listType) {
			case ListTypes.PERSONAL:
				return <SquareRounded color="primary" />;
			case ListTypes.WORK:
				return <SquareRounded color="error" />;
			case ListTypes.STUDY:
				return <SquareRounded color="warning" />;
			default:
				return <SquareRounded color="inherit" />;
		}
	}, [listType]);

	return (
		<>
			<div
				className={`flex justify-between py-1 ${
					status === TaskStatus.OVERDUE
						? 'bg-red-200 text-black'
						: 'text-slate-600'
				} ${completed ? 'opacity-50 line-through' : 'opacity-100'}`}
				key={id}>
				<div className="flex">
					<Checkbox checked={completed} onChange={handleChange} />
					<p
						className="text-lg cursor-pointer relative top-[6.25px]"
						onClick={handleEdit}>
						{name}
					</p>
				</div>
				<div className="flex">
					{listType !== null && (
						<div className="">
							<MenuItem
								icon={calculateListIcon}
								label={listType}
								onClickEvent={() => handleListClick(listType as unknown as FilterBy)}
							/>
						</div>
					)}
					{tag !== null && tag !== '' && (
						<div className="mt-2">
							<MenuTag
								label={tag}
								variant="filled"
								size="small"
								color={calculateMenuColor}
								onClickEvent={() => handleTagClick(tag as FilterBy)}
							/>
						</div>
					)}
				</div>
			</div>
			<Divider />
		</>
	);
};

export default Task;
