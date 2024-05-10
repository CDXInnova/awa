import NavBar from '@/components/navBar/NavBar'
import Sidebar from '@/components/sideBar/Sidebar'
import React from 'react'

import styles from '../ui/marketplace.module.css'


const layoutMarketplace = ({ children }) => {
  return (
    <div className={`${styles.container} w-full h-screen`}>
      <div className={`${styles.menu} w-[70px] bg-zinc-900`}>
        <Sidebar />
      </div>
      <div className={`flex flex-col h-screen flex-1`}>
        <NavBar />
        {children}
      </div>
    </div>
  )
}

export default layoutMarketplace