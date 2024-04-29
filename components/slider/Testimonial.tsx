'use server'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Testimonial = () => {
  const data = [
    {
      img: '1.webp',
      title: '1.5% podatku',
    },
    {
      img: '2.webp',
      title: 'Podaruj przedmiot',
    },
    {
      img: '3.webp',
      title: 'Dowolna kwota',
    },
  ]
  return (
    <>
      <div className='box-testimonials-supportus mt-10 mb-20 animate__fadeIn gap-5 mx-auto'>
        {data.map((item, i) => (
          <Link
            key={i}
            href='#'
            className='img-supportUs'
          >
            <Image
              src={`/assets/data/supportUsSection/${item.img}`}
              height={300}
              width={300}
              alt='Support Us'
              priority
            />
            <div className='supportUs-backdrop' />
            <h2 className='font-xl-clamp supportUsTitle color-gray-100'>{item.title}</h2>
          </Link>
        ))}
      </div>
    </>
  )
}
