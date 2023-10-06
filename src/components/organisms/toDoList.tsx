import React, { KeyboardEventHandler } from 'react';
import { Divider } from '@mui/material';
import { AddRounded } from '@mui/icons-material';
import { TaskProps } from '../../interfaces/taskProps';
import AddNewInput from '../atoms/addNewInput';
import Task from '../atoms/task';

const ToDoList = () => {
  const [tasks, setTasks] = React.useState<TaskProps[]>([]);

  const handleNewTask = (value: string) => {
    setTasks([...tasks, {id: tasks.length + 1, name: value, status: 'due', createdAt: new Date(), requiredBy: new Date()}]);
  }

	return (
		<main className="flex p-5 w-full flex-col">
			<div className="flex mb-10">
				<h1 className="text-5xl font-bold">Today</h1>
				<p className="font-bold text-4xl border rounded min-w-[50px] mt-2 text-center ml-5">
					5
				</p>
			</div>

      <AddNewInput icon={<AddRounded />} placeholder='Add new task' onEnterEvent={handleNewTask} />

      {tasks.map((task) => (
        <Task key={task.id} id={task.id} name={task.name} status={task.status} createdAt={task.createdAt} requiredBy={task.requiredBy} />
      ))}

      <Divider />
			{/* Completed tasks component */}
		</main>
	);
};

export default ToDoList;
