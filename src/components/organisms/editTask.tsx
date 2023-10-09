import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
	Drawer,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import { taskSlice } from '../../slices/tasks/taskSlice';
import { ListTypes } from '../../interfaces/listType';
import { DatePicker } from '@mui/x-date-pickers';
import MenuTag from '../atoms/menuTag';
import { SelectChangeEvent } from '@mui/material';
import moment from 'moment';
import { TaskStatus, TaskType } from '../../interfaces/taskType';

const EditTask = () => {
	const { isOpen, selectedTask } = useSelector(
		(state: RootState) => state.tasks.sideMenu
	);
	const [selectedList, setSelectedList] = React.useState<ListTypes | 'None'>(
		selectedTask?.listType || 'None'
	);
	const [selectedDate, setSelectedDate] = React.useState<moment.Moment | null>(
		selectedTask?.requiredBy ? moment(selectedTask.requiredBy) : null
	);
	const [selectedTag, setSelectedTag] = React.useState<string>('');
	const [updatedTask, setUpdatedTask] = React.useState<TaskType | null>(null);

	const listRef = React.useRef<HTMLSelectElement | null>(null);
	const dateRef = React.useRef<HTMLInputElement | null>(null);

	const dispatch = useDispatch();

	// Used for setting intitial state when task loads
	React.useEffect(() => {
		if (selectedTask) {
			setSelectedList(selectedTask.listType || 'None');
			setSelectedDate(
				selectedTask.requiredBy ? moment(selectedTask.requiredBy) : null
			);
			setSelectedTag(selectedTask.tag || '');
		}
	}, [selectedTask]);

	// Used for dispatching saved task to store
	React.useEffect(() => {
		if (updatedTask?.id) {
			dispatch(taskSlice.actions.saveTask(updatedTask));
		}
	}, [updatedTask, dispatch]);

	// Used for calculating and constructing obj to be saved
	const handleSaveTask = () => {
		if (selectedTask?.id) {
			const today = moment().startOf('day');
			let status = selectedTask?.status; // defaulting to the current status

			if (selectedDate) {
				if (selectedDate.isSame(today, 'day')) {
				} else if (selectedDate.isAfter(today)) {
					status = TaskStatus.NOT_DUE;
				} else if (selectedDate.isBefore(today)) {
					status = TaskStatus.OVERDUE;
				}
			}
			setUpdatedTask({
				...selectedTask,
				listType: selectedList === 'None' ? null : selectedList,
				requiredBy: selectedDate?.toISOString() || '',
				tag: selectedTag,
				status: status,
			});
			dispatch(taskSlice.actions.closeSideMenu());
		}
	};

	const handleDeleteTask = () => {
		if (selectedTask) {
			dispatch(taskSlice.actions.deleteTask({ id: selectedTask.id }));
		}
		dispatch(taskSlice.actions.closeSideMenu());
	};

	const handleListSelect = (event: SelectChangeEvent<string>) => {
		setSelectedList(event.target.value as ListTypes | 'None');
	};

	const handleDateSelect = (date: moment.Moment | null) => {
		setSelectedDate(date);
	};

	const handleTagSelection = (tagLabel: string) => {
		setSelectedTag(tagLabel);
	};

	const calculateTagVariant = (tagLabel: string) => {
		return tagLabel === selectedTag ? 'filled' : 'outlined';
	};

	const deleteBtnStyles =
		'border border-slate-600 text-slate-600 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all ease-in-out mr-2 px-5 py-2 rounded-md';
	const saveBtnStyles =
		'border border-slate-600 bg-slate-600 text-white hover:bg-green-600 hover:border-green-600 transition-all ease-in-out px-5 py-2 rounded-md';
	return (
		<Drawer anchor="right" open={isOpen} onClose={handleSaveTask}>
			<div className="w-full min-w-[30vw] text-slate-600 bg-[#F4F4F4] p-5 flex flex-col justify-between h-full">
				<div>
					<h2 className="mb-5 text-2xl font-bold">Task</h2>
					<div className="flex justify-between items-center mt-10">
						<p className="min-w-[155px] mt-3">Task Name</p>
						<p>{selectedTask?.name}</p>
					</div>
					<div className="flex justify-between items-center mt-10">
						<p className="min-w-[155px] mt-3">List</p>
						<FormControl
							variant="standard"
							margin="none"
							fullWidth
							sx={{ minWidth: 125 }}
							size="small">
							<InputLabel id="list-select-label">Add to List</InputLabel>
							<Select
								ref={listRef}
								id="list-select"
								value={selectedList}
								onChange={handleListSelect}
								autoWidth>
								<MenuItem value="None">
									<em>None</em>
								</MenuItem>
								<MenuItem value={ListTypes.PERSONAL}>Personal</MenuItem>
								<MenuItem value={ListTypes.WORK}>Work</MenuItem>
								<MenuItem value={ListTypes.STUDY}>Study</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div className="flex justify-between items-center mt-10">
						<p className="min-w-[155px] mt-3">Due Date</p>
						<DatePicker
							inputRef={dateRef}
							label="Due Date"
							format="DD/MM/YYYY"
							value={selectedDate}
							onChange={handleDateSelect}
							slotProps={{ textField: { variant: 'standard' } }}
						/>
					</div>
					<div className="flex justify-between items-center mt-10">
						<p className="min-w-[100px] mt-3">Tags</p>
						<div>
							<MenuTag
								label='Easy'
								size='small'
								color='success'
								variant={calculateTagVariant('Easy')}
								onClickEvent={() => handleTagSelection('Easy')}
							/>
							<MenuTag
								label='Normal'
								size='small'
								color='info'
								variant={calculateTagVariant('Normal')}
								onClickEvent={() => handleTagSelection('Normal')}
							/>
							<MenuTag
								label='Hard'
								size='small'
								color='error'
								variant={calculateTagVariant('Hard')}
								onClickEvent={() => handleTagSelection('Hard')}
							/>
						</div>
					</div>
				</div>
				<div>
					<button onClick={handleDeleteTask} className={deleteBtnStyles}>
						Delete Task
					</button>
					<button onClick={handleSaveTask} className={saveBtnStyles}>
						Save Task
					</button>
				</div>
			</div>
		</Drawer>
	);
};

export default EditTask;
