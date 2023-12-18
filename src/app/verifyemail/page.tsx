"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";


export default function VerifyEmailPage() {

    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post('/api/users/verifyemail', {token})
            setVerified(true);
        } catch (error:any) {
            setError(true);
            console.log(error.reponse.data);
            
        }

    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);


    useEffect(() => {
        if(token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return(
        // <div className="card w-96 bg-base-100 shadow-xl">
        <div className="hero min-h-screen bg-base-200">
        <div className="card bg-base-100 shadow-xl w-fit">
        <div className="card-body flex items-center">
            <h2 className="card-title">Verify Email</h2>
            <h3 className=" text-violet-600">{token ? `${token}` : "No Token"}</h3>
            {verified && (
                <div className="flex items-center">
                    <h3 className="text-emerald-500">Email Verified</h3>
                    <Link href="/login">Login</Link>
                </div>
            )}
            {error && (
                <div>
                    <h2 className="text-rose-600">Error</h2>
                    
                </div>
            )}
        </div>
        </div>
        </div>
    )

}