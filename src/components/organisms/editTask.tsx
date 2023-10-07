import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store';
import { Drawer } from '@mui/material';
import { taskSlice } from '../../slices/tasks/taskSlice';

const EditTask = () => {
    const { isOpen, selectedTask } = useSelector((state: RootState) => state.tasks.sideMenu);
    const dispatch = useDispatch();

    const handleSaveTask = () => {
        if (selectedTask) {
            // dispatch(taskSlice.actions.saveTask({ id: selectedTask.id, name: selectedTask.name,  }));
        }
        dispatch(taskSlice.actions.closeSideMenu());
    }

    const handleDeleteTask = () => {
        if (selectedTask) {
            dispatch(taskSlice.actions.deleteTask({id: selectedTask.id}));
        }
        dispatch(taskSlice.actions.closeSideMenu());
    }

  return (
    <Drawer anchor='right' open={isOpen} onClose={handleSaveTask}>
        <div className='w-full min-w-[30vw] h-full text-slate-600 bg-[#F4F4F4] p-5'>
            <h2 className="mb-5 text-2xl font-bold">Menu</h2>
            <div>
                <p className="py-5">{selectedTask?.name}</p>
            </div>

            <button onClick={handleDeleteTask} className='bg-slate-600 text-white px-5 py-2 rounded-md'>Delete Task</button>
            <button onClick={handleSaveTask} className='bg-slate-600 text-white px-5 py-2 rounded-md'>Save Task</button>
        </div>
    </Drawer>
  )
}

export default EditTask