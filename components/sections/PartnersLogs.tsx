'use server'

import Brand from '@/components/slider/Brand'

export const PartnersLogs = () => {
  return (
    <>
      <div className='row align-items-end mt-30'>
        <div className='col-lg-9 wow animate__animated animate__fadeIn'>
          <h3 className='color-linear'>Partnerzy</h3>
        </div>
        <div
          className='col-lg-3 text-lg-end mt-15 hover-up wow animate__animated animate__fadeIn'
          data-wow-delay='0.2s'
        />
      </div>
      <div className='list-logos mt-50 mb-30'>
        <div className='container'>
          <div className='row'>
            <div className='swiper-container swiper-group-1'>
              <Brand />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
