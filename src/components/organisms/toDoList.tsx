import React from 'react';
import AddNewTask from '../atoms/addNewTask';
import Task from '../atoms/task';

const ToDoList = () => {
	return (
		<main className="flex p-5 w-full flex-col">
			<div className="flex mb-10">
				<h1 className="text-5xl font-bold">Today</h1>
				<p className="font-bold text-4xl border rounded min-w-[50px] mt-2 text-center ml-5">
					5
				</p>
			</div>

			<AddNewTask />

			<Task />
			<Task />
			<Task />
			<Task />
			<Task />


			{/* Completed tasks component */}
		</main>
	);
};

export default ToDoList;
