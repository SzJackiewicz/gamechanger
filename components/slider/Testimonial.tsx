/* eslint-disable @next/next/no-img-element */
import React from 'react'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'

SwiperCore.use([Autoplay, Navigation])
export const Testimonial = () => {
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
      <div className='text-center mt-70'>
        <h2 className='color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp'>Wesprzyj nas</h2>
        <p className='text-lg color-gray-500 wow animate__animated animate__fadeInUp'>Lorem ipsum dolor sit amet, consectet</p>
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
                        src={`assets/imgs/page/about/img4.png`}
                        alt='Genz'
                      />
                      <div className='card-info card-bg-2'>
                        <div className='info-bottom mb-15'>
                          <h3 className='color-white mb-10'>Przykładowy tytuł</h3>
                        </div>
                      </div>
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
