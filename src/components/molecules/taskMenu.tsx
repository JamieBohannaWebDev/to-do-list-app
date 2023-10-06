import React from 'react';
import MenuItem from '../atoms/menuItem';
import { CheckCircleRounded, NextWeekRounded, TodayRounded, UpcomingRounded } from '@mui/icons-material';

const TaskMenu = () => {
    
	const handleItemClick = () => {
		console.log('Item clicked!');
	};
	return (
		<div className="mb-10">
		<h3 className="mb-2 text-xs font-semibold uppercase">Tasks</h3>
			<MenuItem
				icon={<UpcomingRounded color='warning' />}
				label={'Upcoming'}
				value={12}
				onClickEvent={handleItemClick}
			/>

			<MenuItem
				icon={<TodayRounded color='secondary' />}
				label={'Today'}
				value={4}
				onClickEvent={handleItemClick}
			/>

			<MenuItem
				icon={<NextWeekRounded color='info' />}
				label={'Next Week'}
				value={15}
				onClickEvent={handleItemClick}
			/>

			<MenuItem
				icon={<CheckCircleRounded color='success' />}
				label={'Completed'}
				value={19}
				onClickEvent={handleItemClick}
			/>
		</div>
	);
}

export default TaskMenu;
