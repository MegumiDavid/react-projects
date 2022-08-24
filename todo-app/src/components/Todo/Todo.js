import { React, useState, useEffect } from 'react'
import TodoHeader from './TodoHeader'
import Input from './Input'
import List from './List'
import BtnControls from './BtnControls'

function Todo({ theme, setTheme }) {
  const [todoItem, setTodoItem] = useState('') 
  const [todoList, setTodoList] = useState([]) 
  const [btnValue, setBtnValue] = useState('all')
  const [itensLeft, setItensLeft] = useState(0)

  useEffect( () => {
    itemLeft()
  }, [todoList])  

  function itemLeft() {
    setItensLeft(
      todoList.filter( todoItem => {
        return todoItem.check === false
      }).length
    )
  }

  function clearCompleted() {
    setTodoList( 
      todoList.filter( todoItem => {
        return todoItem.check === false
      })
    )
  }

  return (
    <section className="todo">
        <div className="todo__container">
            <TodoHeader 
              theme = {theme}
              setTheme = {setTheme}
            />
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
              btnValue={btnValue}
            />
            <BtnControls 
              todoList = {todoList}
              setTodoList = {setTodoList}
              btnValue = {btnValue}
              setBtnValue = {setBtnValue}
              itensLeft  = {itensLeft}
            />
        </div>
    </section>
  )
}

export default Todo;