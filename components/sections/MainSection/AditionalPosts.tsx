'use client'

import Link from 'next/link'
import React from 'react'
import { useWindowSize } from 'usehooks-ts'
import { heroSectionData } from '@/public/assets/data/heroSection/heroSectionData'

export const AditionalPosts = () => {
  const { width = 0 } = useWindowSize()

  if (width > 500) {
    return heroSectionData.slice(1, 4).map((item, i) => (
      <div
        className='card-list-posts wow animate__animated animate__fadeIn'
        data-wow-delay={`${i / 10}s`}
        key={i}
      >
        <div className='card-image hover-up mt-5'>
          <Link href={`/aktualnosci/${item.id}`}>
            <img
              src={`${item.cover}`}
              alt='Gamechanger'
            />
          </Link>
        </div>
        <div className='card-info'>
          <Link
            className='btn btn-tag bg-gray-800 hover-up'
            href={`/aktualnosci/${item.id}`}
          >
            ZDROWIE
          </Link>
          <Link href={`/aktualnosci/${item.id}`}>
            <h4 className='mt-15 mb-20 color-white text-xxl'>{item.title}</h4>
          </Link>
          <p className='color-gray-500 text-md'>{item.subtitle}</p>
        </div>
      </div>
    ))
  } else {
    return heroSectionData.slice(1, 4).map((item, i) => (
      <div
        className='card-style-1 hover-up wow animate__animated animate__fadeIn'
        data-wow-delay='.0s'
        key={i}
      >
        <div className='card-image'>
          <Link
            className='link-post'
            href='/single-sidebar'
          >
            <img
              src={`${item.cover}`}
              alt='Article main cover'
              className='img-opacity'
            />
            <div className='card-info card-bg-2'>
              <div className='info-bottom mb-15'>
                <h4 className='color-white mb-15'>{item.title}</h4>
                <h6 className='color-white mb-15'>Podtytuł Podtytuł Podtytuł Podtytuł Podtytuł</h6>
                <div className='box-author'>
                  <div className='author-info'>
                    <span className='color-gray-200 text-sm'>{item.subtitle}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    ))
  }
}

export default AditionalPosts
