"use client"

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast, {Toaster} from 'react-hot-toast';

const Profile = () => {
  const router = useRouter();
  const [data, SetData] = useState({
    username: "",
    email: "",
    id: ""
  })
  const Logout = async () => {
    try {
      await axios.get('/api/users/logout');
      toast.success("Logged out Successfully!")
      router.push('/login');
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message); 
    }
  }

  const getUserDetails = async () => {
    try {
      const res = await axios.get('/api/users/me')
      console.log(res.data);
      SetData(() => ({...data, id: res.data.data._id, username: res.data.data.username, email: res.data.data.email}))
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }    
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <Toaster/>
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold m-5">Hello there</h1>
            <div>{data.id === ""? "Details" : 
            <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{data.id}</h2>
              <h1 className="text-7xl font-bold" >{data.username}</h1>
              <h2 className="card-title">{data.email}</h2>
                <Link href={`/profile/${data.username}`} className='text-cyan-400'>Check Profile</Link>
            </div>
            </div>
            }</div>
            <button onClick={getUserDetails} className="btn btn-info m-5">Get User Details</button>
            <button onClick={Logout} className="btn btn-primary m-5">Logout</button>
            </div>
        </div>
       </div>

  )
}

export default Profile