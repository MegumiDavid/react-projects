import { React, useState } from 'react';
import TodoItem from './TodoItem'

function List({ todoList, setTodoList, setTodoItem }) {
  return (
    <div className="list">
      { todoList.map( item => (
        <TodoItem 
          key={item.id}
          item={item}
          todoList={todoList}
          setTodoItem={setTodoItem}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  )
}

export default List;