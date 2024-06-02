import Link from 'next/link'
import React, { useState } from 'react'
import { Navigation } from '../../types/types'
import { HeartFilled } from '@/public/assets/icons/HeartFilled'

type MobileMenuProps = {
  openClass: string
  navigation?: Navigation[]
}

const MobileMenu = ({ openClass, navigation }: MobileMenuProps) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: -1,
  })

  const handleToggle = (key: number) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: -1,
      })
    } else {
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
            <div className='perfect-scroll'>
              <div className='mobile-menu-wrap mobile-header-border'>
                <nav className='mt-15'>
                  <ul className='mobile-menu font-heading'>
                    {navigation &&
                      navigation.length > 0 &&
                      navigation.map((item, index) => (
                        <li
                          key={index}
                          className={isActive.key === index ? 'has-children active' : 'has-children'}
                          onClick={() => handleToggle(index)}
                        >
                          <Link href={item.slug}>{item.label}</Link>
                          {item.subMenu.length > 0 && (
                            <>
                              <span className='menu-expand'>
                                <i className='fi-rr-caret-down' />
                              </span>
                              <ul className={isActive.key === index ? 'sub-menu d-block' : 'sub-menu d-none'}>
                                {item?.subMenu?.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <Link href={`${item.slug}/${subItem.slug}`}>{subItem.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                          {index === 0 && <HeartFilled />}
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
