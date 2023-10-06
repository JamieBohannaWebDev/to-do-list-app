import React from 'react';
import MenuItem from '../atoms/menuItem';
import { SquareRounded } from '@mui/icons-material';

const ListMenu = () => {
	const handleItemClick = () => {
		console.log('Item clicked!');
	};
	return (
		<>
			<h3>Lists</h3>
			<MenuItem
				icon={<SquareRounded />}
				label={'Personal List'}
				value={12}
				onClickEvent={handleItemClick}
			/>

			<MenuItem
				icon={<SquareRounded />}
				label={'Work List'}
				value={12}
				onClickEvent={handleItemClick}
			/>

			<MenuItem
				icon={<SquareRounded />}
				label={'Home List'}
				value={12}
				onClickEvent={handleItemClick}
			/>
		</>
	);
};

export default ListMenu;
