import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Navigation } from '../../types/types'

type HeaderProps = {
  handleOpen: () => void
  handleRemove: () => void
  openClass: string
  navigation: Navigation[]
}

const Header = ({ handleOpen, handleRemove, openClass, navigation }: HeaderProps) => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 100

      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <>
      <header className={scroll ? 'header sticky-bar bg-gray-900 stick' : 'header sticky-bar bg-gray-900'}>
        <div className='container'>
          <div className='main-header'>
            <div className='header-logo'>
              <Link
                className='d-flex'
                href='/'
              >
                Logo
              </Link>
            </div>
            <div className='header-nav'>
              <nav className='nav-main-menu d-none d-xl-block'>
                <ul className='main-menu'>
                  {navigation?.length > 0 &&
                    navigation.map((item, index) => (
                      <li
                        className={item.subMenu.length > 0 ? 'has-children' : ''}
                        key={index}
                      >
                        <Link
                          className={index === 0 ? 'active' : 'color-gray-500'}
                          href={item.slug}
                        >
                          {item.name}
                        </Link>
                        {item.subMenu.length > 0 && (
                          <ul className='sub-menu'>
                            {item.subMenu.map((submenu, idx) => (
                              <li key={idx}>
                                <Link
                                  className='color-gray-500'
                                  href={`${item.slug}/${submenu.slug}`}
                                >
                                  {submenu.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                </ul>
              </nav>
              <div
                className={`burger-icon burger-icon-white ${openClass && 'burger-close'}`}
                onClick={() => {
                  handleOpen()
                  handleRemove()
                }}
              >
                <span className='burger-icon-top' />
                <span className='burger-icon-mid' />
                <span className='burger-icon-bottom' />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
