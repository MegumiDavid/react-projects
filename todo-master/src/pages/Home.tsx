import { Link } from 'react-router-dom';

export default function Home() : JSX.Element {
  return (
    <>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/login'><li>Login</li></Link>
        <Link to='/signin'><li>Signup</li></Link>
        <Link to='/todo'><li>Todo</li></Link>
      </ul>
    </>
  )
}
