import React, { useRef } from 'react'
import "./SignIn.css"
import { auth } from '../../firebase';
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth'


export default function SignIn({setSignIn}) {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e)=>{
        e.preventDefault();
       
        createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
         ).then((authUser)=>{
            console.log(authUser, "authUser registration")
         }).catch((error)=>{
          console.log(error.message, "error in registration")
         })
    }

    const signIn = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        ).then((authUser)=>{
          console.log(authUser, "authUser login")
       }).catch((error)=>{
        console.log(error.message, "error in login")
       })
          

    }
  return (
    <div className='signUp-screen'>
      <form>
        <h1>Sign In</h1>
        <input placeholder='Email' type='email' ref={emailRef}/>
        <input placeholder='Password' type='password' ref={passwordRef}/>
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4 >
        <span className='signUp-screen-gray'>New to Netflix? </span>
        <span className='signUp-screen-white' onClick={register}>Sign up now.</span>
         </h4>
        

      </form>
    </div>
  )
}
