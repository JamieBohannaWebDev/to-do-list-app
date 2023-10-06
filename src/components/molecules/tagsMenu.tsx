import React from 'react'
import MenuTag from '../atoms/menuTag'

const TagsMenu = () => {
  const handleItemClick = () => {
    console.log('Item clicked!')
  }
  return (
    <>
      <h3>Tags</h3>
      <MenuTag label={'Personal'} size={'small'} color={'info'} onClickEvent={handleItemClick} />
      <MenuTag label={'Work'} size={'small'} color={'error'} onClickEvent={handleItemClick} />
      <MenuTag label={'Home'} size={'small'} color={'primary'} onClickEvent={handleItemClick} />
    </>
  )
}

export default TagsMenu