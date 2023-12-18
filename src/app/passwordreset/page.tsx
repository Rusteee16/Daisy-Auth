"use client"

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const page = () => {
    const [verified, setVerified] = useState(false);
    const router = useRouter()
    
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        token: ""
    }) 

    const [buttonDisabled, SetButtonDisabled] = React.useState(false);

    const [ loading, SetLoading] = React.useState(false);

    const UpdatePassword = async () => {
        try {
        SetLoading(true);
        const response = await axios.post("/api/users/passwordreset", user);
        toast.success(response.data.message);
        console.log("Success", response.data);
        setVerified(true);
        router.push('/login')
        
        } catch (error: any) {
        toast.error(error.message);
        } finally {
        SetLoading(false)
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setUser({...user, token: urlToken || ''});
    }, []);

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
        SetButtonDisabled(false);
        } else{
        SetButtonDisabled(true);
        }
    }, [user.email, user.password]);
    
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
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    placeholder="Enter your email" 
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
                    placeholder="Enter new password" 
                    className="input input-bordered" 
                    required />
                </div>
                <div className="form-control mt-6">
                {loading ? <span className="loading loading-spinner text-primary self-center"></span> : 
                <button onClick={UpdatePassword} className="btn btn-primary">{buttonDisabled ? "Enter Details" : "Update Password"}</button>}
                </div>
            </div>
            </div>
        </div>
    )
}

export default page