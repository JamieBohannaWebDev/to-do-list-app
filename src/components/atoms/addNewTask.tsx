import React from 'react'
import AddNewInput from './addNewInput'
import { AddRounded } from '@mui/icons-material'

const AddNewTask = () => {
  return (
    <div>
        <AddNewInput icon={<AddRounded />} placeholder='Add new task' onEnterEvent={() => console.log('Enter pressed')} />
    </div>
  )
}

export default AddNewTask