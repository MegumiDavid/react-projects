import React, { useState } from 'react';
import '../style/register.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useAtom } from 'jotai';
import { useMutation } from 'react-query';
import authAtom from '../states/authAtom';
import axios from 'axios';


interface SigninBodyType {
  email: string;
  password: string;
  confirmPassword: string;
}


export default function Signin() : JSX.Element {

  const [isVisible1, setIsVisible1] = useState<boolean>(false);
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [pwd1, setPwd1] = useState<string>('');
  const [pwd2, setPwd2] = useState<string>('');
  
  const [auth, setAuth] = useAtom(authAtom);

  let navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    authMutate.mutate();
  }

  const authMutate = useMutation(() => registerAuth());

  async function registerAuth() {
    if (pwd1 !== pwd2) {
      alert('password is not matching')
      return;
    }

    const SigninBody: SigninBodyType = {
      email: email,
      password: pwd1,
      confirmPassword: pwd2
    }

    try {
      const response = await axios.post('http://localhost:3001/user/signin', SigninBody);
      const data = response.data;
      setAuth({
        logged: true,
        token: data.token,
        userId: data.userId,
      })
      localStorage.setItem('logged', (true).toString());
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      navigate('/')
    } catch (err: any) {
      if (err.response.data.message === 'password is not matching') {
        alert('password is not matching');
      } else if (err.response.data.message === 'empty input') { 
        alert('empty input');
      } else if (err.response.data.message === 'user already exists') {
        alert('user already exists');
      } else if (err.response.data.message === 'password should have at least 6 characters'){
        alert('password should have at least 6 characters');
      } else {
        alert('There was an error');
      }
    }
  }

  return (
    <div className="container">
      <h1 className="title">#todo</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <input 
            className='register-input' 
            type="text" 
            placeholder='email' 
            required 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            value={email}
          />
          <div className="input-wrapper">
            <input 
              className='register-input register-input-password' 
              type={`${isVisible1 ? 'text' : 'password'}`}
              placeholder='password' 
              required  
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPwd1(e.target.value)}
              value={pwd1}
            />
            <button type="button" className="eye" onClick={() => setIsVisible1(!isVisible1)}>
              <i>
                {isVisible1 ? <AiFillEye /> : <AiFillEyeInvisible />}
              </i>
            </button>
          </div>
          <div className="input-wrapper">
            <input 
              className='register-input register-input-password' 
              type={`${isVisible2 ? 'text' : 'password'}`}
              placeholder='confirm password' 
              required  
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPwd2(e.target.value)}
              value={pwd2}
            />
            <button type="button" className="eye" onClick={() => setIsVisible2(!isVisible2)}>
              <i>
                {isVisible2 ? <AiFillEye /> : <AiFillEyeInvisible />}
              </i>
            </button>
          </div>
          <button type="submit">Sign In</button>
          <p>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
        </form>
      </div>
  )
}
