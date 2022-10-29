import React from 'react'
import { signIn, getSession } from 'next-auth/react';

const Login = () => {

  return (
    <div className="container">
      <p>Welcome to the weather forecast web application. Please login with your</p>
      <p>Github user to use the application and view the weather in your city.</p>
      <button onClick={signIn}>Login</button>
    </div>
  )
}

export default Login;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {}
  }
  
}