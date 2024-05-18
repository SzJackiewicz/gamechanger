import Image from 'next/image'
import React from 'react'
import SwiperCore, { Autoplay, Navigation } from 'swiper'

SwiperCore.use([Autoplay, Navigation])
const Brand = () => {
  const data = [
    {
      img: 'agon.svg',
    },
    {
      img: 'mon.svg',
    },
    {
      img: 'fig.svg',
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
            src={`/assets/imgs/slider/patrons/${i + 1}.png`}
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
