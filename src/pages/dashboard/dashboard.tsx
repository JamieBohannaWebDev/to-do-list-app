import React from 'react'
import SideMenu from '../../components/organisms/sideMenu'
import ToDoList from '../../components/organisms/toDoList'

const Dashboard = () => {
  return (
    <main className='flex'>
        <SideMenu></SideMenu>
        <ToDoList></ToDoList>
    </main>
  )
}

export default Dashboard