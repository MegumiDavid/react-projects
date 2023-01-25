import './style/main.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Todo from './pages/Todo';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Error from './pages/Error';
import Home from './pages/Home';


export default function App() : JSX.Element {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}