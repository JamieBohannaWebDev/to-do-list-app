import React from 'react';

interface MenuItemProps {
    icon: React.JSX.Element;
    label: string;
    value: number;
    onClickEvent: () => void;
}

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
