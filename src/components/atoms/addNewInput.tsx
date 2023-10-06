import React from 'react'
import { AddNewInputProps } from '../../interfaces/addNewInputProps'

const AddNewInput = ({icon, placeholder, onEnterEvent}: AddNewInputProps) => {
  return (
    <div className='border rounded w-full py-1 px-3'>
        <span className='relative bottom-[2px]'>{icon}</span>
        <input className='outline-none ml-1' placeholder={placeholder} type='text' />
    </div>
  )
}

export default AddNewInput