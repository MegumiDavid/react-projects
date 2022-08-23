import { React, useState } from 'react'
import TodoHeader from './TodoHeader'
import Input from './Input'
import List from './List'
import BtnControls from './BtnControls'

function Todo() {
  const [todoItem, setTodoItem] = useState('') 
  const [todoList, setTodoList] = useState([]) 

  return (
    <section className="todo">
        <div className="todo__container">
            <TodoHeader />
            <Input 
              todoItem = {todoItem}
              setTodoItem = {setTodoItem}
              todoList = {todoList}
              setTodoList = {setTodoList}
            />
            <List 
              todoList = {todoList}
              setTodoList = {setTodoList}
              setTodoItem = {setTodoItem}
            />
            <BtnControls />
        </div>
    </section>
  )
}

export default Todo;