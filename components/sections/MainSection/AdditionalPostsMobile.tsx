'use server'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AdditionalPostsProps } from '@/components/sections/MainSection/AdditionalPosts'
import { base64Blur } from '@/components/elements/base64ImageBlur'

export const AdditionalPostsMobile = ({ post }: { post: AdditionalPostsProps }) => {
  return (
    <div
      className='card-style-1 hover-up wow animate__animated animate__fadeInUp mt-3'
      data-wow-delay='.0s'
    >
      <div
        className='card-image wow animate__animated animate__fadeInUp'
        data-wow-delay='.5s'
      >
        <Link
          className='link-post'
          href={`/aktualnosci/${post.slug}`}
        >
          <Image
            src={`${post.coverImage.url}`}
            alt='Article main cover'
            className='img-opacity'
            width={190}
            height={190}
            priority
            placeholder='blur'
            blurDataURL={base64Blur}
          />
          <div className='img-backdrop' />
          <div className='card-info card-bg-2'>
            <div className='info-bottom mb-15'>
              <h4 className='color-white mb-15'>{post.title}</h4>
              <div className='author-info'>
                <h6 className='color-gray-200 font-sm-clamp ellipsis'>{post.subtitle}</h6>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
