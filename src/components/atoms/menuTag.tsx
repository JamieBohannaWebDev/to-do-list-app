import React from 'react'
import { MenuTagProps } from '../../interfaces/menuTagProps'
import { Chip } from '@mui/material';

const MenuTag = ({ label, color, size, onClickEvent }: MenuTagProps) => {
  return (
    <Chip label={label} color={color} size={size} onClick={onClickEvent} />
  )
}

export default MenuTag