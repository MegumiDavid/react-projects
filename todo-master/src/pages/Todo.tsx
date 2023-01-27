import { useEffect } from 'react';
import Filter from '../components/Todo/Filter';
import Input from '../components/Todo/Input';
import TodoListWrapper from '../components/Todo/TodoList/TodoListWrapper';
import Atr from '../components/Todo/Atr';

import { useNavigate } from 'react-router-dom'

import authAtom from '../states/authAtom';

import { BiLogOut } from 'react-icons/bi';
import { useAtom } from 'jotai';

export default function Todo() : JSX.Element {

  let navigate = useNavigate();

  const [auth, setAuth] = useAtom(authAtom);

  function logOut() {
    setAuth({
      logged: false,
      token: '',
      userId: ''
    })
    localStorage.clear();
    navigate('/login');
  }

  return (
    <>
      <div className="container">
        <h1 className="title">#todo</h1>
        <Filter />
        <Input />
        <TodoListWrapper />
        <Atr />
      </div>
      <button className='btn-sticky' onClick={logOut}>
        <i><BiLogOut /></i>
      </button>
    </>
  )
}
