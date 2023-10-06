import React from 'react';
import { Checkbox, Divider } from '@mui/material';

const Task = () => {
	return (
		<>
			<div className="flex">
				<Checkbox />
				<p className="text-xl relative top-[5.5px]">Task</p>
			</div>
			<Divider />
		</>
	);
};

export default Task;
