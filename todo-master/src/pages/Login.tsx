import React, { useState } from 'react';
import '../style/register.scss';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


export default function Login() : JSX.Element {

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1 className="title">#todo</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Log In</h2>
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
              type={`${isVisible ? 'text' : 'password'}`}
              placeholder='password' 
              required  
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPwd(e.target.value)}
              value={pwd}
            />
            <button className="eye" onClick={() => setIsVisible(!isVisible)}>
              <i>
                {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
              </i>
            </button>
          </div>
          <button type="submit">Log In</button>
          <desc>
            Don't have an account? <Link to='/signin'>Register</Link>
          </desc>
        </form>
      </div>
  )
}
