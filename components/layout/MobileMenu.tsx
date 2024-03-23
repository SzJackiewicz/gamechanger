import Link from 'next/link'
import React, { useState } from 'react'
import { Navigation } from '../../types/types'

type MobileMenuProps = {
  openClass: string
  navigation: Navigation[]
}

const MobileMenu = ({ openClass, navigation }: MobileMenuProps) => {
  // State to track the active status and key
  const [isActive, setIsActive] = useState({
    status: false,
    key: -1,
  })

  // Function to handle toggling the active status based on the given key
  const handleToggle = (key: number) => {
    // Check if the current key matches the active key in the state
    if (isActive.key === key) {
      // If the current key matches, set the active status to false
      setIsActive({
        status: false,
        key: -1,
      })
    } else {
      // If the current key does not match, set the active status to true and update the key
      setIsActive({
        status: true,
        key,
      })
    }
  }

  return (
    <>
      <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar bg-gray-900 ${openClass}`}>
        <div className='mobile-header-wrapper-inner'>
          <div className='mobile-header-content-area'>
            <div className='mobile-logo border-gray-800'>
              <Link
                className='d-flex'
                href='/'
              >
                <img
                  className='logo-night'
                  alt='GenZ'
                  src='/assets/imgs/template/logo.svg'
                />
                <img
                  className='d-none logo-day'
                  alt='GenZ'
                  src='/assets/imgs/template/logo-day.svg'
                />
              </Link>
            </div>
            <div className='perfect-scroll'>
              <div className='mobile-menu-wrap mobile-header-border'>
                <nav className='mt-15'>
                  <ul className='mobile-menu font-heading'>
                    {navigation?.length > 0 &&
                      navigation.map((item, index) => (
                        <li
                          key={index}
                          className={isActive.key === index ? 'has-children active' : 'has-children'}
                          onClick={() => handleToggle(index)}
                        >
                          {item.subMenu.length > 0 && (
                            <span className='menu-expand'>
                              <i className='fi-rr-caret-down' />
                            </span>
                          )}
                          <Link href={item.slug}>{item.label}</Link>
                          {item.subMenu.length > 0 && (
                            <ul className={isActive.key === index ? 'sub-menu d-block' : 'sub-menu d-none'}>
                              {item?.subMenu?.map((subItem, index) => (
                                <li key={index}>
                                  <Link href={subItem.slug}>{subItem.name}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
