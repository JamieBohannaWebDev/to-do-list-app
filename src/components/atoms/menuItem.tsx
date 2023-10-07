import React from 'react';
import { MenuItemProps } from '../../interfaces/menuItemProps'

const MenuItem = ({ icon, label, value, onClickEvent }: MenuItemProps) => {
    const tailwindClasses = 'flex items-center justify-between cursor-pointer ml-1 hover:bg-gray-200 p-1 rounded';
	return (
        <div onClick={onClickEvent} className={tailwindClasses}>
            <div className='flex py-1'>
                {icon}
                <span className='px-2'>{label}</span>
            </div>
            {value !== undefined && (<span className='min-w-[25px] text-center'>{value}</span>)}
        </div>
    );
}

export default MenuItem;
