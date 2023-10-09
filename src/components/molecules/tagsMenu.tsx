import MenuTag from '../atoms/menuTag'
import { FilterBy } from '../../interfaces/filterBy'
import { useDispatch } from 'react-redux'
import { taskSlice } from '../../slices/tasks/taskSlice'

const TagsMenu = () => {
  const dispatch = useDispatch();

  const handleItemClick = (filterType: FilterBy) => {
    dispatch(taskSlice.actions.filterBy(filterType));
  }
  
  return (
    <div className="mb-10">
      <h3 className="mb-2 text-xs font-semibold uppercase">Difficulty Tags</h3>
      <MenuTag label='Easy' variant='filled' size='small' color='success' onClickEvent={() => handleItemClick(FilterBy.EASYTAG)} />
      <MenuTag label='Normal' variant='filled' size='small' color='info' onClickEvent={() => handleItemClick(FilterBy.NORMALTAG)} />
      <MenuTag label='Hard' variant='filled' size='small' color='error' onClickEvent={() => handleItemClick(FilterBy.HARDTAG)} />
    </div>
  )
}

export default TagsMenu