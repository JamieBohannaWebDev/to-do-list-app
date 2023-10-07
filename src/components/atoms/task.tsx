import React from 'react';
import { Checkbox, Divider } from '@mui/material';
import { TaskComponentProps } from '../../interfaces/taskType';
import MenuTag from './menuTag';
import MenuItem from './menuItem';
import { ListTypes } from '../../interfaces/listType';
import { SquareRounded } from '@mui/icons-material';

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
	const handleChange = () => {
		onTaskCompletion(id);
	};

	const handleEdit = () => {
		onTaskEdit(id);
	};

	const handleTagClick = () => {
		console.log('tag clicked');
	};

	const handleListClick = () => {
		console.log('list clicked');
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
				return (<SquareRounded color='primary' />);
			case ListTypes.WORK:
				return (<SquareRounded color='error' />);
			case ListTypes.STUDY:
				return (<SquareRounded color='warning' />);
			default:
				return (<SquareRounded color='inherit' />);
		}
	}, [listType]);

	return (
		<>
			<div className={`flex justify-between py-1 ${completed ? 'opacity-50 line-through' : 'opacity-100'}`} key={id}>
				<div className='flex'>
					<Checkbox checked={completed} onChange={handleChange} />
					<p
						className="text-lg cursor-pointer relative top-[6.25px] text-slate-600"
						onClick={handleEdit}>
						{name}
					</p>
				</div>
				<div className='flex'>
					{listType !== null && (
						<div className="">
							<MenuItem icon={calculateListIcon} label={listType} onClickEvent={handleListClick} />
						</div>
					)}
					{tag !==  null && (
						<div className="mt-2">
							<MenuTag
								label={tag}
								variant="filled"
								size="small"
								color={calculateMenuColor}
								onClickEvent={handleTagClick}
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
