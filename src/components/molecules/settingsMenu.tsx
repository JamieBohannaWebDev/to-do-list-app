import { Snackbar } from '@mui/material';
import MenuItem from '../atoms/menuItem';
import { SettingsRounded, LogoutRounded } from '@mui/icons-material';
import React from 'react';

const SettingsMenu = () => {
	const [open, setOpen] = React.useState<boolean>(false);

	const handleItemClick = () => {
		setOpen(true);
	};

	const handleSnackClose = () => {
		setOpen(false);
	};
	return (
		<>
			<MenuItem
				icon={<SettingsRounded />}
				label='Settings'
				onClickEvent={handleItemClick}
			/>
			<MenuItem
				icon={<LogoutRounded />}
				label='Sign out'
				onClickEvent={handleItemClick}
			/>
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				open={open}
				autoHideDuration={5000}
				onClose={handleSnackClose}
        message='Fool, you can never leave! You must complete your tasks!' />
		</>
	);
};

export default SettingsMenu;
