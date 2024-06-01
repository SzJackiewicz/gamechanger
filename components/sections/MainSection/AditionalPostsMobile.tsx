'use server'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Item {
  title: string
  id: number
  subtitle: string
  cover: string
  author?: string
  article: string
  date?: string
}

export const AditionalPostsMobile = ({ item }: { item: Item }) => {
  return (
    <div
      className='card-style-1 hover-up wow animate__animated animate__fadeIn mt-3'
      data-wow-delay='.0s'
    >
      <div className='card-image '>
        <Link
          className='link-post'
          href={`/aktualnosci/${item.id}`}>
          <Image
            src={`${item.cover}`}
            alt='Article main cover'
            className='img-opacity'
            width={190}
            height={190}
            priority
          />
          <div className='img-backdrop' />
          <div className='card-info card-bg-2'>
            <div className='info-bottom mb-15'>
              <h4 className='color-white mb-15'>{item.title}</h4>
              <div className='box-author'>
                <div className='author-info'>
                  <h6 className='color-gray-200 font-sm-clamp'>{item.subtitle}</h6>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
