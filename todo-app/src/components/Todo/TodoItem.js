import { React, useState } from 'react';
import IconCross from '../../images/icon-cross.svg'

function TodoItem({item, todoList, setTodoList}) {

  const [newArray, setNewArray] = useState([])
  function removeItem() {
    setTodoList( todoList.filter( todoItem => {
      return todoItem.id !== item.id
    }))
  }

  function checkItem() {
    todoList.map( (todoItem) => {
      if(todoItem.id === item.id) {
        setNewArray([...newArray, { ...todoItem, check: !todoItem.check }])
      }
      setNewArray([...newArray, todoItem])
    })
    setTodoList(newArray)
    setNewArray([])
  }

  return (
    <div className="list__item-box">
        <button 
          onClick={checkItem} 
          className={`checkbox ${item.check ? 'checked-item' : ''}`}
        ></button>
        <p className={`list__item ${item.check ? 'checked-item' : ''}`}>{item.text}</p>
        <button onClick={removeItem} className="remove">
            <img src={IconCross} alt="remove" />
        </button>
    </div>
  )
}

export default TodoItem;