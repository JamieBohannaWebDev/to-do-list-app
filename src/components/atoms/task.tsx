import React from 'react';
import { Checkbox, Divider } from '@mui/material';
import { TaskComponentProps } from '../../interfaces/taskProps';

const Task = ({
	id,
	name,
	status,
	createdAt,
	requiredBy,
	completed,
	onTaskCompletion,
	onTaskEdit
}: TaskComponentProps) => {
	const handleChange = () => {
		onTaskCompletion(id);
	};

	const handleEdit = () => {
		onTaskEdit(id);
	}

	return (
		<>
			<div className={`flex ${completed ? 'opacity-50 line-through' : 'opacity-100'}`} key={id}>
				<Checkbox checked={completed} onChange={handleChange} />
				<p className="text-xl cursor-pointer relative top-[5.5px]" onClick={handleEdit}>{name}</p>
			</div>
			<Divider />
		</>
	);
};

export default Task;
