'use client'

import Link from 'next/link'
import React from 'react'
import { useWindowSize } from 'usehooks-ts'
import { heroSectionData } from '@/public/assets/data/heroSection/heroSectionData'
import Image from 'next/image'
import { AditionalPostsMobile } from './AditionalPostsMobile'
import { base64Blur } from '@/components/elements/base64ImageBlur'

export const AditionalPosts = () => {
  const { width = 0 } = useWindowSize()

  if (width > 500) {
    return heroSectionData?.slice(1, 4).map((item, i) => (
      <div
        className='card-list-posts wow animate__animated animate__fadeIn'
        data-wow-delay={`${i / 10}s`}
        key={i}
      >
        <div className='card-image hover-up mt-5'>
          <Link href={`/aktualnosci/${item.id}`}>
            <Image
              src={`${item.cover}`}
              alt='Article main cover'
              width={190}
              height={190}
              priority
              placeholder='blur'
              blurDataURL={base64Blur}
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
          <p className='color-gray-500 font-sm-clamp ellipsis'>{item?.subtitle}</p>
        </div>
      </div>
    ))
  } else {
    return heroSectionData?.slice(1, 4).map((item, i) => (
      <AditionalPostsMobile
        item={item}
        key={i}
      />
    ))
  }
}

export default AditionalPosts
