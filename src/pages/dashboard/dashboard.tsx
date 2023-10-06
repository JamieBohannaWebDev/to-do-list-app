import React from 'react'
import SideMenu from '../../components/organisms/sideMenu'
import ToDoList from '../../components/organisms/toDoList'

function Dashboard() {
  return (
    <main className='flex h-screen'>
        <SideMenu></SideMenu>
        <ToDoList></ToDoList>
    </main>
  )
}

export default Dashboard