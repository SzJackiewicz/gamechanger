import Image from 'next/image'
import React from 'react'
import SwiperCore, { Autoplay, Navigation } from 'swiper'

SwiperCore.use([Autoplay, Navigation])
const Brand = () => {
  const data = [
    {
      img: '/assets/imgs/slider/patrons/1.png',
    },
    {
      img: '/assets/imgs/slider/patrons/2.png',
    },
    {
      img: '/assets/imgs/slider/patrons/3.png',
    },
    {
      img: '/assets/imgs/slider/patrons/4.png',
    },
  ]

  return (
    <div className='swiper-wrapper pt-5 flex-wrap justify-content-around gap-5'>
      {data?.map((item, i) => (
        <div
          className='flex partner mb-10'
          key={i}
        >
          <Image
            src={item.img}
            alt='partner logo'
            width={0}
            height={0}
            sizes='100%'
            style={{ width: '100%', height: 'auto', zIndex: '1' }} // optional
          />
        </div>
      ))}
    </div>
  )
}

export default Brand
