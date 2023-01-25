import React, { useState } from 'react';
import '../style/register.scss';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


export default function Signin() : JSX.Element {

  const [isVisible1, setIsVisible1] = useState<boolean>(false);
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [pwd1, setPwd1] = useState<string>('');
  const [pwd2, setPwd2] = useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
            <button className="eye" onClick={() => setIsVisible1(!isVisible1)}>
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
            <button className="eye" onClick={() => setIsVisible2(!isVisible2)}>
              <i>
                {isVisible2 ? <AiFillEye /> : <AiFillEyeInvisible />}
              </i>
            </button>
          </div>
          <button type="submit">Sign In</button>
          <desc>
            Already have an account? <Link to='/login'>Login</Link>
          </desc>
        </form>
      </div>
  )
}
