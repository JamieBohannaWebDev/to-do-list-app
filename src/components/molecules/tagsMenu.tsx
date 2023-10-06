import React from 'react'
import MenuTag from '../atoms/menuTag'

const TagsMenu = () => {
  const handleItemClick = () => {
    console.log('Item clicked!')
  }
  return (
    <div className="mb-10">
      <h3 className="mb-2 text-xs font-semibold uppercase">Tags</h3>
      <MenuTag label={'Personal'} size={'small'} color={'info'} onClickEvent={handleItemClick} />
      <MenuTag label={'Work'} size={'small'} color={'error'} onClickEvent={handleItemClick} />
      <MenuTag label={'Home'} size={'small'} color={'success'} onClickEvent={handleItemClick} />
    </div>
  )
}

export default TagsMenu