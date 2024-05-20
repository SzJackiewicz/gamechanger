'use client'

import Link from 'next/link'
import React from 'react'
import { useWindowSize } from 'usehooks-ts'
import Image from 'next/image'
import { AditionalPostsMobile } from './AditionalPostsMobile'

type AditionalPostsProps = {
  subtitle: string,
  title: string,
  coverImage: {
    url: string
  }
}[]

export const AditionalPosts = ({posts} : { posts: AditionalPostsProps}) => {
  const { width = 0 } = useWindowSize()

  if (width > 500) {
    return posts.slice(0, 3).map((item, i) => (
      <div
        className='card-list-posts wow animate__animated animate__fadeIn'
        data-wow-delay={`${i / 10}s`}
        key={i}
      >
        <div className='card-image hover-up mt-5'>
          <Link href={`/aktualnosci/`}>
            <Image
              src={item.coverImage.url}
              alt='Article main cover'
              width={190}
              height={190}
              priority
            />
          </Link>
        </div>
        <div className='card-info'>
          <Link
            className='btn btn-tag bg-gray-800 hover-up'
            href={`/aktualnosci/`}
          >
            ZDROWIE
          </Link>
          <Link href={`/aktualnosci/`}>
            <h4 className='mt-15 mb-20 color-white text-xxl'>{item.title}</h4>
          </Link>
          <p className='color-gray-500 text-sm'>{item.subtitle}</p>
        </div>
      </div>
    ))
  } else {
    return posts.slice(0, 3).map((item, i) => (
      <AditionalPostsMobile
        item={item}
        key={i}
      />
    ))
  }
}

export default AditionalPosts
