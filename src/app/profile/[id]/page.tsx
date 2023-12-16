import React from 'react'

const UserProfile = ({params}: any) => {
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="font-bold text-8xl">{params.id}.</p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
  )
}

export default UserProfile