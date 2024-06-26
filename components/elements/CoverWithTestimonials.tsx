'use server'

import Image from 'next/image'
import React from 'react'
import { base64Blur } from './base64ImageBlur'

type Props = {
  title?: string
  subtitle?: string
  img?: string
}

export const CoverWithTestimonials = ({ title, subtitle, img = '/assets/imgs/page/o-nas/aboutus.webp' }: Props) => {
  return (
    <div className='cover-relative m-auto'>
      <Image
        width={600}
        height={300}
        alt='cover'
        src={img}
        priority
        className='coverFilter'
        placeholder='blur'
        blurDataURL={base64Blur}
      />
      <div className='cover-testimonials'>
        <p className='color-gray-200 font-xl-clamp'>{title}</p>
        <p className='color-gray-200 mt-3 font-l-clamp'>{subtitle}</p>
      </div>
    </div>
  )
}
