import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import authAtom from './states/authAtom';

export default function PrivateRoutes() : JSX.Element {
  const [auth, setAuth] = useAtom(authAtom);
  let navigate = useNavigate()
  useEffect(() => {
    const logged = localStorage.getItem('logged') === 'true';
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    
    if (logged) {
      setAuth({
        logged: logged,
        token: token || '',
        userId: userId || ''
      })
      console.log(auth)
      navigate('/todo')
    }
  }, [])

  return (
    auth.logged ? <Outlet /> : <Navigate to='/login' />
  )
}
