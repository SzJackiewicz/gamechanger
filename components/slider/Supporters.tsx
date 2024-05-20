'use server'
import React from 'react'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import {FocusOnMotion} from "@/types/types";

SwiperCore.use([Autoplay, Navigation])
export const Supporters = ({ title, focusOnEmotions }: { title: string, focusOnEmotions: FocusOnMotion[] }) => {
console.log('Supporters')
  console.log( focusOnEmotions)
// console.log(focusOnEmotions.length)
  return (
    <>
      <div className='text-center mb-40'>
        <h3 className='color-linear d-inline-block wow animate__animated animate__fadeInUp'>{title}</h3>
      </div>
      <div className='box-testimonials mb-150animate__fadeIn mb-50'>
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
            {focusOnEmotions?.length > 0 && focusOnEmotions.map((item, i) => (
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
                        src={item.photo.url}
                      />
                    </p>
                  </div>
                  <div className='card-item-name'>
                    <label>{item.placeholder}</label>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
