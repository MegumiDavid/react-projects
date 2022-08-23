import React from 'react';

function Input({ todoItem, setTodoItem, setTodoList, todoList }) {

  function inputHandleChange(e) {
    setTodoItem(e.target.value)
  }

  function inputSubmit(e) {
    e.preventDefault();
    if(e.key === 'Enter') {
      setTodoList([ ...todoList, {
        id: Math.random(),
        text: todoItem,
        check: false,
      } ])
      setTodoItem('')
    }
  }

  return (
    <div className="input__box">
        <div className="circle"></div>
        <input 
          onChange={inputHandleChange}
          value={todoItem}
          onKeyUp={inputSubmit}
          autoFocus={true}
          className="input__todo" 
          placeholder="Create a new todo..." 
          type="text" 
        />
    </div>
  )
}

export default Input;