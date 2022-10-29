import React from 'react'
import { signOut } from 'next-auth/react'

const Logout = () => {
  
  return (
    <button onClick={() => signOut()}>Logout</button>
  )
}

export default Logout;