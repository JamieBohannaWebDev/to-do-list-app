import React from 'react'
import { AddNewInputProps } from '../../interfaces/addNewInputProps'

const AddNewInput = ({icon, placeholder, onEnterEvent}: AddNewInputProps) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputRef.current) {
      // Parse the string, and if there is commas, then capture that, splice, put into an array, loop over that array for the onEnterEvent.
      let listOfTasks = inputRef.current.value.split(", ");

      if (listOfTasks) {
        listOfTasks.forEach((task) => {
          onEnterEvent(task);
        })
      }
      inputRef.current.value = '';
    }
  }
  return (
    <div className='border rounded w-full py-1 px-3'>
        <span className='relative bottom-[2px]'>{icon}</span>
        <input className='outline-none ml-1' ref={inputRef} placeholder={placeholder} onKeyDown={handleKeyDown} type='text' />
    </div>
  )
}

export default AddNewInput