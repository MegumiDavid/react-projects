import React from 'react';
import IconCross from '../../images/icon-cross.svg'

function TodoItem({item, todoList, setTodoList}) {

  function removeItem() {
    setTodoList( todoList.filter( todoItem => {
      return todoItem.id !== item.id
    }))
  }

  function checkItem() {
    setTodoList(
      todoList.map( todoItem => {
        if(todoItem.id === item.id) {
          return {...todoItem, check : !todoItem.check}
        } 
        return todoItem
      })
    )
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