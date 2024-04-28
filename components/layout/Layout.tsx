import React, { useState } from 'react'
import BackToTop from '@/components/elements/BackToTop'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import MobileMenu from '@/components/layout/MobileMenu'
import { useNavigationData } from '@/lib/api/getNavigationData'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [openClass, setOpenClass] = useState('')
  const { data: navigationData } = useNavigationData()

  const handleOpen = () => {
    document.body.classList.add('mobile-menu-active')
    setOpenClass('sidebar-visible')
  }

  const handleRemove = () => {
    if (openClass === 'sidebar-visible') {
      document.body.classList.remove('mobile-menu-active')
      setOpenClass('')
    }
  }

  return (
    <>
      {openClass && (
        <div
          className='body-overlay-1'
          onClick={handleRemove}
        />
      )}

      <Header
        handleOpen={handleOpen}
        handleRemove={handleRemove}
        openClass={openClass}
        navigation={navigationData}
      />
      <MobileMenu
        openClass={openClass}
        navigation={navigationData}
      />
      <main className='main'>{children}</main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default Layout
