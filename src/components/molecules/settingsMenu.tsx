import React from 'react'
import MenuItem from '../atoms/menuItem';
import {SettingsRounded, LogoutRounded} from '@mui/icons-material';

const SettingsMenu = () => {
  const handleItemClick = () => {
		console.log('Item clicked!');
	};
  return (
    <>
      <MenuItem icon={<SettingsRounded />} label={'Settings'} onClickEvent={handleItemClick} />
      <MenuItem icon={<LogoutRounded />} label={'Sign out'} onClickEvent={handleItemClick} />
    </>
  )
}

export default SettingsMenu;