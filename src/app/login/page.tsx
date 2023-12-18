"use client";

import Link from 'next/link';
import React, { useEffect } from 'react'
import axios from 'axios';
import toast, { Toaster} from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter()
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  }) 

  const [buttonDisabled, SetButtonDisabled] = React.useState(false);

  const [ loading, SetLoading] = React.useState(false);

  const OnLogin = async () => {
    try {
      SetLoading(true);
      const response = await axios.post("/api/users/login", user);
      toast.success(response.data.message);
      console.log("Success", response.data);
      router.push('/profile')
      
    } catch (error: any) {
      toast.error(error.response.data.error);
      // console.log(error);
      
    } finally {
      SetLoading(false)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      SetButtonDisabled(false);
    } else{
      SetButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div><Toaster/></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Check out my Next.js Authentication App.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                type="email" 
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email" 
                className="input input-bordered" 
                required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input 
                type="password" 
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password" 
                className="input input-bordered" 
                required />
            </div>
            <Link href="/validatemail">Forgot password?</Link>
            <Link href="/signup">SignUp</Link>
            <div className="form-control mt-6">
            {loading ? <span className="loading loading-spinner text-primary self-center"></span> : 
              <button onClick={OnLogin} className="btn btn-primary">{buttonDisabled ? "Enter Details" : "Login"}</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage