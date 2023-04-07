import React from 'react'
import "./Profile.css"
import Nav from '../Nav/Nav'
import profileImg from "../../assets/profileIcon.png"
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { signOut } from "firebase/auth";
import { auth } from '../../firebase'


function Profile() {
    const user = useSelector(selectUser);
  return (
    <div className='profile'>
      <Nav/>
      <div className='profile_body'>
      <h1>Profile</h1>
      <div className='profile_info'>
      <img  src={profileImg} alt="profileImg"/>
      <div className='profile_details'>
        <h2>{user.email}</h2>
        <div className='profile_plans'>
        <h3>Plans(Current Plan: premium)</h3>

            <button className='profile_signout' onClick={()=>signOut(auth)}>Sign Out</button>
        </div>
      </div>
      </div>

      </div>
    </div>
  )
}

export default Profile
