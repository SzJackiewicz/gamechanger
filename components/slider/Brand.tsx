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
    {
      img: 'flow.svg',
    },
    {
      img: 'evara.svg',
    },
  ]

  return (
    <div className='swiper-wrapper pt-5 flex-wrap justify-content-around gap-5 '>
      {data.map((item, i) => (
        <div
          className='flex'
          key={i}
        >
          <a href='#'>
            <img
              src={`/assets/imgs/page/homepage3/${item.img}`}
              alt='partner logo'
            />
          </a>
        </div>
      ))}
    </div>
  )
}

export default Brand
