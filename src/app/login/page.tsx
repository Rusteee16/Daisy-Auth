"use client";

import Link from 'next/link';
import React from 'react'

const LoginPage = () => {

  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: ""
  })

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Check out my Next.js Authentication App.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
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
                value={user.email}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password" 
                className="input input-bordered" 
                required />
            </div>
            <Link href="/signup">SignUp</Link>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage