import Image from 'next/image';
import React from 'react'
import Logout from '../Logout';
import HeaderStyles from './header.module.css';
import { useSession } from 'next-auth/react';

const Header = () => {
  const { data:session } = useSession();

  return (
    <div className={HeaderStyles.container}>
      <div className={HeaderStyles.siteTitle}>
        <Image
          src="/cloud.png"
          width={60}
          height={60}
          alt="Logo"
        />
        <h1>Weater Forecast</h1>
      </div>

      {
        session
        ? <div>
            <Logout/>
          </div>
        : null
        
      }
      
    </div>
  )
}

export default Header