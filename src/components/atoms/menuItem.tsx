import React from 'react';
import { MenuItemProps } from '../../interfaces/menuItemProps'

const MenuItem = ({ icon, label, value, onClickEvent }: MenuItemProps) => {
    const tailwindClasses = 'flex items-center cursor-pointer ml-1 hover:bg-gray-200 p-1 rounded';
	return (
        <div onClick={onClickEvent} className={tailwindClasses}>
            {icon}
            <span className='min-w-[140px] px-2 py-1'>{label}</span>
            <span className='min-w-[25px] text-center'>{value}</span>
        </div>
    );
}

export default MenuItem;
