import React, { useState } from 'react';
import '../style/register.scss';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import authAtom from '../states/authAtom';


interface LoginBodyType {
  email: string;
  password: string;
}


export default function Login() : JSX.Element {

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('romildo@gremio.com');
  const [pwd, setPwd] = useState<string>('gremiodc');

  const [auth, setAuth] = useAtom(authAtom);

  let navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    authMutate.mutate();
  }

  const authMutate = useMutation(() => fetchAuth());

  async function fetchAuth() {
    const LoginBody: LoginBodyType = {
      email: email,
      password: pwd
    }

    try {
      const response = await axios.post('http://localhost:3001/user/login', LoginBody);
      const data = response.data;
      setAuth({
        logged: true,
        token: data.token,
        userId: data.userId,
      })
      localStorage.setItem('logged', (true).toString());
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      navigate('/todo')
    } catch (err: any) {
      if (err.response.data.message === 'password incorrect') {
        alert('Incorrect password');
      } else if (err.response.data.message === 'email not found') {
        alert('Email not found');
      } else {
        alert('There was an error');
      }
    }
  }


  return (
    <div className="container">
      <h1 className="title">#todo</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Log In</h2>
          <input 
            className='register-input' 
            type="email" 
            placeholder='email' 
            required 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            value={email}
          />
          <div className="input-wrapper">
            <input 
              className='register-input register-input-password' 
              type={`${isVisible ? 'text' : 'password'}`}
              placeholder='password' 
              required  
              minLength={6}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPwd(e.target.value)}
              value={pwd}
            />
            <button type="button" className="eye" onClick={() => setIsVisible(!isVisible)}>
              <i>
                {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
              </i>
            </button>
          </div>
          <button type="submit">Log In</button>
          <p>
            Don't have an account? <Link to='/signin'>Register</Link>
          </p>
        </form>
      </div>
  )
}
