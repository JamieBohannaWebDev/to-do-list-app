import SideMenu from '../../components/organisms/sideMenu'
import ToDoList from '../../components/organisms/toDoList'
import EditTask from '../../components/organisms/editTask'

const Dashboard = () => {
  return (
    <main className='flex'>
        <SideMenu></SideMenu>
        <ToDoList></ToDoList>
        <EditTask></EditTask>
    </main>
  )
}

export default Dashboard