import React, { useRef, useState } from 'react'
import BaseButton from '../../components/BaseButton'
import Modal from '../../components/Modal'
import ListItems from '../../components/TodosList/ListItems'
import './style.scss'

let TEST_DATA = []

for (let i = 0; i < 0; i++) { 
  TEST_DATA = [...TEST_DATA, {
    id: i,
    title: `title ${i}`,
    text: `test text ${i}`
  }]
}
const TodosList = () => {
  const [isShowModalAddItem, setIsShowModalAddItem] = useState(false)
  const [listItem, setListItem] = useState(TEST_DATA)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const handleDeleteItem = (id) => {
    setListItem((prevState) => prevState?.filter((item) => item?.id !== id))
  }

  const handleClickOk = () => {
    if(title && text)
    setListItem([...listItem, {
      id: Date.now(),
      title: title,
      text: text
    }])
    setIsShowModalAddItem(false)
    setTitle('')
    setText('')
  }
  return (
    <div className='todos container'>
      <h3 className='todos__header'>TodosList</h3>
      <div className='todos__content'>
        <BaseButton onClick={() => setIsShowModalAddItem(true)}>Add Item</BaseButton>
        <ListItems listItem={listItem} 
        setListItem = {setListItem}
        onDeleteItem={handleDeleteItem} 
        />
        
      </div>
      <Modal visible={isShowModalAddItem} 
      title="Add Item" 
      onCancel={() => setIsShowModalAddItem(false)} 
      onOk={handleClickOk}
      isDisabledButtonOnOK = {(!title || !text)}
      >
        <input
          placeholder="Title..."
          className="App-input"
          value={title}
          onChange = {e => setTitle(e.target.value)}
        />
        <input
          placeholder="Text..."
          className="App-input"
          value={text}
          onChange = {e => setText(e.target.value)}
        />
      </Modal>
    </div>
  )
}

export default TodosList