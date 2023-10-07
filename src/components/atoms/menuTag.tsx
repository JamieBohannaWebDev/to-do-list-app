import React from 'react'
import { MenuTagProps } from '../../interfaces/menuTagProps'
import { Chip } from '@mui/material';

const MenuTag = ({ label, color, size, variant, onClickEvent }: MenuTagProps) => {

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    onClickEvent(label)
  }

  return (
    <div className="mr-1 inline">
      <Chip label={label} color={color} variant={variant} size={size} onClick={handleClick} />
    </div>
  )
}

export default MenuTag