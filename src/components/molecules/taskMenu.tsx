import React from 'react';
import MenuItem from '../atoms/menuItem';
import { CheckCircleRounded, NextWeekRounded, TodayRounded, UpcomingRounded } from '@mui/icons-material';

const TaskMenu = () => {
    
	const handleItemClick = () => {
		console.log('Item clicked!');
	};
	return (
		<>
		<h3>Tasks</h3>
			<MenuItem
				icon={<UpcomingRounded />}
				label={'Upcoming'}
				value={12}
				onClickEvent={handleItemClick}
			/>

			<MenuItem
				icon={<TodayRounded />}
				label={'Today'}
				value={4}
				onClickEvent={handleItemClick}
			/>

			<MenuItem
				icon={<NextWeekRounded />}
				label={'Next Week'}
				value={15}
				onClickEvent={handleItemClick}
			/>

			<MenuItem
				icon={<CheckCircleRounded />}
				label={'Completed'}
				value={19}
				onClickEvent={handleItemClick}
			/>
		</>
	);
}

export default TaskMenu;
