import React from 'react'
import MenuTag from '../atoms/menuTag'

const TagsMenu = () => {
  const handleItemClick = () => {
    console.log('Item clicked!')
  }
  return (
    <div className="mb-10">
      <h3 className="mb-2 text-xs font-semibold uppercase">Difficulty Tags</h3>
      <MenuTag label={'Easy'} size={'small'} color={'success'} onClickEvent={handleItemClick} />
      <MenuTag label={'Normal'} size={'small'} color={'info'} onClickEvent={handleItemClick} />
      <MenuTag label={'Hard'} size={'small'} color={'error'} onClickEvent={handleItemClick} />
    </div>
  )
}

export default TagsMenu