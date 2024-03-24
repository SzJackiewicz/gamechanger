/* eslint-disable @next/next/no-img-element */
import React from 'react'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'

SwiperCore.use([Autoplay, Navigation])
export const Supporters = () => {
  const data = [
    {
      img: '1.webp',
    },
    {
      img: '2.webp',
    },
    {
      img: '3.webp',
    },
    {
      img: '4.webp',
    },
    {
      img: '5.webp',
    },
  ]
  return (
    <>
      <div className='text-center mb-50'>
        <h2 className='color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp'>Wspierają nas</h2>
      </div>
      <div className='box-testimonials mb-150animate__fadeIn mb-100'>
        <div className='box-swiper' />
        <div className='swiper-container swiper-group-3'>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.swiper-button-prev-style-3',
              nextEl: '.swiper-button-next-style-3',
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              575: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              767: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              991: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1199: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1350: {
                slidesPerView: 3,
                spaceBetween: 30,
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
                  className='card-style-1 hover-up mb-30'
                  data-wow-delay='.0s'
                >
                  <div className='card-image'>
                    <Link
                      className='link-post'
                      href='#'
                    >
                      <img
                        src={`assets/imgs/page/about/img2.png`}
                        alt='Genz'
                      />
                    </Link>
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
