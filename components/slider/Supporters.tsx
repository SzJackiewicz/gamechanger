/* eslint-disable @next/next/no-img-element */
import React from 'react'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Autoplay, Navigation])
export const Supporters = ({ title }: { title: string }) => {
  const data = [
    {
      img: '1.webp',
      name: 'Jacek Szymkiewicz',
    },
    {
      img: '2.webp',
      name: 'Jacek Szymkiewicz',
    },
    {
      img: '3.webp',
      name: 'Jacek Szymkiewicz',
    },
    {
      img: '4.webp',
      name: 'Jacek Szymkiewicz',
    },
    {
      img: '5.webp',
      name: 'Jacek Szymkiewicz',
    },
  ]
  return (
    <>
      <div className='text-center mb-40'>
        <h3 className='color-linear d-inline-block wow animate__animated animate__fadeInUp'>{title}</h3>
      </div>
      <div className='box-testimonials mb-150animate__fadeIn mb-100'>
        <div className='box-swiper' />
        <div className='swiper-container swiper-group-3'>
          <Swiper
            slidesPerView={4}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.swiper-button-prev-style-3',
              nextEl: '.swiper-button-next-style-3',
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              575: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              767: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              991: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1199: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1350: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            className='swiper-wrapper pt-5'
          >
            {data.map((item, i) => (
              <SwiperSlide
                className='swiper-slide'
                key={i}
              >
                <div
                  className='card-style-medium mb-30 hoverUpTitle'
                  data-wow-delay='.0s'
                >
                  <div className='card-image hover-up'>
                    <p className='link-post'>
                      <img
                        src={`assets/imgs/page/about/img2.png`}
                        alt='Genz'
                      />
                    </p>
                  </div>
                  <div className='card-item-name'>
                    <label>{item.name}</label>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='swiper-buttons'>
            <div className='swiper-button-prev swiper-button-prev-style-3' />
            <div className='swiper-button-next swiper-button-next-style-3' />
          </div>
        </div>
      </div>
    </>
  )
}
