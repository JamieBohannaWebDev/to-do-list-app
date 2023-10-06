import React from 'react';
import { MenuItemProps } from '../../interfaces/menuItemProps'

const MenuItem = ({ icon, label, value, onClickEvent }: MenuItemProps) => {
    const tailwindClasses = 'flex items-center cursor-pointer';
	return (
        <div onClick={onClickEvent} className={tailwindClasses}>
            {icon}
            <span className='min-w-[100px]'>{label}</span>
            <span className='border rounded-xl'>{value}</span>
        </div>
    );
}

export default MenuItem;
