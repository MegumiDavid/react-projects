import { React, useEffect } from 'react';
import TodoItem from './TodoItem'

function List({ todoList, setTodoList, setTodoItem, btnValue }) {

  function renderAll() {
    return (
      todoList.map( item => (
        <TodoItem 
          key={item.id}
          item={item}
          todoList={todoList}
          setTodoItem={setTodoItem}
          setTodoList={setTodoList}
        />
      ))
    )
  }

  function renderCompleted() {
    return (
      todoList.map( item => (
        item.check && <TodoItem key={item.id} item={item} todoList={todoList} setTodoItem={setTodoItem} setTodoList={setTodoList}/> 
      ))
    )
  }

  function renderActive() {
    return (
      todoList.map( item => (
        !item.check && <TodoItem key={item.id} item={item} todoList={todoList} setTodoItem={setTodoItem} setTodoList={setTodoList}/> 
      ))
    )
  }

  return (
    <div className="list">
      { btnValue === 'all' && renderAll() }
      { btnValue === 'active' && renderActive() }
      { btnValue === 'completed' && renderCompleted() }
    </div>
  )
}

export default List;