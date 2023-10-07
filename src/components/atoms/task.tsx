import React from 'react';
import { Checkbox, Divider } from '@mui/material';
import { TaskComponentProps } from '../../interfaces/taskType';

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
			<div className={`flex py-1 ${completed ? 'opacity-50 line-through' : 'opacity-100'}`} key={id}>
				<Checkbox checked={completed} onChange={handleChange} />
				<p className="text-lg cursor-pointer relative top-[6.25px] text-slate-600" onClick={handleEdit}>{name}</p>
			</div>
			<Divider />
		</>
	);
};

export default Task;
