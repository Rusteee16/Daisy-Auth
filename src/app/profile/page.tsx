"use client"

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast, {Toaster} from 'react-hot-toast';

const Profile = () => {
  const router = useRouter();
  const [data, SetData] = useState("nothing")
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
      SetData(res.data.data._id)
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
            <h1 className="text-5xl font-bold">Hello there</h1>
            <h2 className="text-3xl font-bold to-blue-700">{data === "nothing"? "Details" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <button onClick={Logout} className="btn btn-primary">Logout</button>
            <br/>
            <button onClick={getUserDetails} className="btn btn-info">Get User Details</button>
            </div>
        </div>
       </div>

  )
}

export default Profile