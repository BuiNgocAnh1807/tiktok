import React, {useState} from 'react'
import './style.scss'
import Modal from '../../Modal'
import BaseButton from '../../BaseButton'
const TodoItem = ({ title, id, text, onDeleteItem, listItem, setListItem }) => {
  const [isShowModalAddItem, setIsShowModalAddItem] = useState(false)
  const [editingTitle, setEditingTitle] = useState(title);
  const [editingText, setEditingText] = useState(text);

 
  const handleClickOk1 = (id1) => {
    const listItem123 = [...listItem].map(item =>{
      if(item.id === id1){
        item.title = editingTitle
        item.text = editingText
      }
      return item
    })
    console.log(listItem123)
    setListItem(listItem123)
    setIsShowModalAddItem(false)
  }

  return (
    <div
      className='todos-item'
    >
      <span className='todos-item__title'>{title}</span>
      <span>{text}</span>
      <div className='todos-item__btn-close' onClick={() => onDeleteItem(id)}>x</div>
      <BaseButton onClick={() => setIsShowModalAddItem(true)}>Edit</BaseButton>


      <Modal visible={isShowModalAddItem} 
      onOk = {() => handleClickOk1(id)}
      title="Edit" onCancel={() => setIsShowModalAddItem(false)} 
      isDisabledButtonOnOK = {editingTitle === title && editingText === text}
      >
        <input
          placeholder="Title..."
          className="App-input"
          value={editingTitle}
          onChange = {e => setEditingTitle(e.target.value)}
        />
        <input
          className="App-input"
          placeholder="Text..."
          value={editingText} 
          onChange = {e => setEditingText(e.target.value)}
        />
      </Modal>
    </div>
      
    )
}

export default TodoItem