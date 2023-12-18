import Link from 'next/link'
import React from 'react'

const UserProfile = ({params}: any) => {
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold m-5">Hello there</h1>
            <p className="font-bold text-6xl">{params.id}.</p>
            <Link href={'/profile'} className="btn btn-primary m-5">Back</Link>
            </div>
        </div>
        </div>
  )
}

export default UserProfile