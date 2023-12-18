"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const page = () => {
    const router = useRouter()
    const [useremail, SetUserEmail] = useState({
        email: ""
    });

    const [buttonDisabled, SetButtonDisabled] = React.useState(false);

    const [ loading, SetLoading] = React.useState(false);

    const CheckUser = async () => {
        try {
        SetLoading(true);
        const user = await axios.post("/api/users/validatemail", useremail);
        toast.success("Password reset link sent to mail.");
        console.log("Success", user.data);
        router.push('/login')
        
        } catch (error: any) {
        toast.error(error.message);
        } finally {
        SetLoading(false)
        }
    }

    useEffect(() => {
        if (useremail.email.length > 0 ) {
        SetButtonDisabled(false);
        } else{
        SetButtonDisabled(true);
        }
    }, [useremail]);

  return (
    <div className="hero min-h-screen bg-base-200">
        <div><Toaster/></div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-5xl font-bold">Change Password</h1>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input 
                    type="email" 
                    value={useremail.email}
                    onChange={(e) => SetUserEmail({...useremail,email: e.target.value})}
                    placeholder="Enter valid email" 
                    className="input input-bordered" 
                    required />
                </div>
                <div className="form-control mt-6">
                    {loading ? <span className="loading loading-spinner text-primary self-center"></span> : 
                    <button onClick={CheckUser} className="btn btn-primary">{buttonDisabled ? "Enter Email" : "Send Password Reset Link"}</button>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default page