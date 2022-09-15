import React from 'react'
import TodoItem from '../TodoItem'
import './style.scss'

const ListItems = ({ listItem, onDeleteItem, setListItem }) => {
  return (
    <div className='todos-list'>
      {listItem?.map((todo) => {
        return <TodoItem key={todo?.id} {...todo} 
        setListItem = {setListItem}
        listItem = {listItem}
        onDeleteItem={onDeleteItem} />
      })}
    </div>
  )
}

export default ListItems