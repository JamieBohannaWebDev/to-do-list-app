import React from 'react';

interface MenuItemProps {
    icon: React.ReactNode;
    label: string;
    value: number;
    onClickEvent: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, value, onClickEvent }) => {
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
