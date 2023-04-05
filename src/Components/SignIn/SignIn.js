import React, { useRef } from 'react'
import "./SignIn.css"
import { auth } from '../../firebase';

export default function SignIn({setSignIn}) {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e)=>{
        e.preventDefault();
        setSignIn(false);
        auth.createUserWithEmailAndPassword( )
    }

    const signIn = (e)=>{
        e.preventDefault();

    }
  return (
    <div className='signUp-screen'>
      <form>
        <h1>Sign In</h1>
        <input placeholder='Email' type='email' ref={emailRef}/>
        <input placeholder='Password' type='password' ref={passwordRef}/>
        <button type='submit'>Sign In</button>

        <h4 >
        <span className='signUp-screen-gray'>New to Netflix? </span>
        <span className='signUp-screen-white' onClick={register}>Sign up now.</span>
         </h4>
        

      </form>
    </div>
  )
}
