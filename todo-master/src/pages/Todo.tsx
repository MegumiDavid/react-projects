import Filter from '../components/Todo/Filter';
import Input from '../components/Todo/Input';
import TodoListWrapper from '../components/Todo/TodoList/TodoListWrapper';
import Atr from '../components/Todo/Atr';

import { useNavigate } from 'react-router-dom'

import { BiLogOut } from 'react-icons/bi';

export default function Todo() : JSX.Element {

  let navigate = useNavigate();

  return (
    <>
      <div className="container">
        <h1 className="title">#todo</h1>
        <Filter />
        <Input />
        <TodoListWrapper />
        <Atr />
      </div>
      <button className='btn-sticky' onClick={() => navigate('/')}>
        <i><BiLogOut /></i>
      </button>
    </>
  )
}
