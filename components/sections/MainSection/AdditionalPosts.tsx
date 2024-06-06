'use client'

import Link from 'next/link'
import React from 'react'
import { useWindowSize } from 'usehooks-ts'
import Image from 'next/image'
import { AdditionalPostsMobile } from './AdditionalPostsMobile'
import { base64Blur } from '@/components/elements/base64ImageBlur'

export type AdditionalPostsProps = {
  subtitle: string,
  title: string,
  slug: string,
  coverImage: {
    url: string
  }
}

export const AdditionalPosts = ({ posts }: {posts: AdditionalPostsProps[]}) => {
  const { width = 0 } = useWindowSize()

  if (width > 500) {
    return posts.slice(0, 3).map((item, i) => (
      <div
        className='card-list-posts wow animate__animated animate__fadeIn'
        data-wow-delay={`${i / 10}s`}
        key={i}
      >
        <div className='card-image hover-up mt-5'>
          <Link href={`/aktualnosci/${item.slug}`}>
            <Image
              src={item.coverImage.url}
              alt={item.title}
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
            href={`/aktualnosci/${item.slug}`}
          >
            ZDROWIE
          </Link>
          <Link href={`/aktualnosci/${item.slug}`}>
            <h4 className='mt-15 mb-20 color-white text-xxl'>{item.title}</h4>
          </Link>
          <p className='color-gray-500 font-sm-clamp ellipsis'>{item?.subtitle}</p>
        </div>
      </div>
    ))
  } else {
    return posts.slice(0, 3).map((item, i) => (
      <AdditionalPostsMobile
          post={item}
          key={i}
      />
    ))
  }
}

export default AdditionalPosts
