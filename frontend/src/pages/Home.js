import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to NG.CASH!</h1>
      <Link to={'/signin'}>Sign in</Link>
      <Link to={'/login'}>Log in</Link>
    </div>
  )
}
