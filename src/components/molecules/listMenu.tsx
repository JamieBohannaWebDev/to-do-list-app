import React from 'react';
import MenuItem from '../atoms/menuItem';
import { SquareRounded } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ListTypes } from '../../interfaces/listType';

const ListMenu = () => {
	const tasks = useSelector((state: RootState) => state.tasks.tasks);

	const personalListTasks = React.useMemo(
		() => tasks.filter((task) => task.listType === ListTypes.PERSONAL),
		[tasks]
	);
	const workListTasks = React.useMemo(
		() => tasks.filter((task) => task.listType === ListTypes.WORK),
		[tasks]
	);
	const studyListTasks = React.useMemo(
		() => tasks.filter((task) => task.listType === ListTypes.STUDY),
		[tasks]
	);
	
	const handleItemClick = () => {
		console.log('Item clicked!');
	};
	return (
		<div className="mb-10">
			<h3 className="mb-2 text-xs font-semibold uppercase">Lists</h3>
			<MenuItem
				icon={<SquareRounded color='error' />}
				label={ListTypes.WORK}
				value={workListTasks.length}
				onClickEvent={handleItemClick}
			/>

			<MenuItem
				icon={<SquareRounded color='primary' />}
				label={ListTypes.PERSONAL}
				value={personalListTasks.length}
				onClickEvent={handleItemClick}
			/>

			<MenuItem
				icon={<SquareRounded color='warning' />}
				label={ListTypes.STUDY}
				value={studyListTasks.length}
				onClickEvent={handleItemClick}
			/>
		</div>
	);
};

export default ListMenu;
