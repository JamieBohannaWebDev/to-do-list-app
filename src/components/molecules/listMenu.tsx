import React from 'react';
import MenuItem from '../atoms/menuItem';
import { SquareRounded } from '@mui/icons-material';

const ListMenu = () => {
	const handleItemClick = () => {
		console.log('Item clicked!');
	};
	return (
		<div className="mb-10">
			<h3 className="mb-2 text-xs font-semibold uppercase">Lists</h3>
			<MenuItem
				icon={<SquareRounded color='error' />}
				label={'Personal List'}
				value={12}
				onClickEvent={handleItemClick}
			/>

			<MenuItem
				icon={<SquareRounded color='primary' />}
				label={'Work List'}
				value={12}
				onClickEvent={handleItemClick}
			/>

			<MenuItem
				icon={<SquareRounded color='warning' />}
				label={'Home List'}
				value={12}
				onClickEvent={handleItemClick}
			/>
		</div>
	);
};

export default ListMenu;
