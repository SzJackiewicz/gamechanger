'use server'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Testimonial = () => {
  const data = [
    {
      img: '1.webp',
      title: 'Dowolna kwota',
      slug: 'https://donate.stripe.com/test_8wM2ataO015Ye883cf',
    },
    {
      img: '2.webp',
      title: 'Cykliczne wsparcie',
      slug: 'https://buy.stripe.com/test_6oEeXf2hudSK7JK7sw',
    },
    {
      img: '3.webp',
      title: 'Jednorazowe wsparcie',
      slug: 'https://buy.stripe.com/test_dR6bL32hubKC2pq8wy',
    },
  ]
  return (
    <>
      <div className='box-testimonials-supportus mt-10 mb-20 px-4 animate__fadeIn gap-5 mx-auto'>
        <script
          async
          src='https://js.stripe.com/v3/buy-button.js'
        />
        {data.map((item, i) => (
          <Link
            key={i}
            href={item.slug}
            className='img-supportUs'
            target='_blank'
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
