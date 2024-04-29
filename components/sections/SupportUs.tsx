'use server'

import { Testimonial } from '../slider/Testimonial'

export const SupportUs = () => {
  return (
    <>
      <div className='list-logos mb-10'>
        <div className='container'>
          <div className='center-flex mt-50'>
            <h3 className='color-linear d-inline-block wow animate__animated animate__fadeInUp m-auto '>Wesprzyj nas</h3>
          </div>
          <div className='row'>
            <div className='swiper-container swiper-group-1 mt-20 mb-30'>
              <Testimonial />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
