import Image from 'next/image';
import React from 'react'
import HeaderStyles from './header.module.css';

const Header = () => {
  return (
    <div className={HeaderStyles.container}>
      <div className={HeaderStyles.siteTitle}>
        <Image
          src="/cloud.png"
          width={60}
          height={60}
        />
        <h1>Weater Forecast</h1>
      </div>
      
    </div>
  )
}

export default Header