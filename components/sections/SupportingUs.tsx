'use client'

import { Supporters } from '../slider/Supporters'

export const SupportingUs = () => {
  return (
    <>
      <div className='list-logos mb-30'>
        <div className='container'>
          <div className='row'>
            <div className='swiper-container swiper-group-1'>
              <Supporters title='Ambasadorzy'/>
              <Supporters title='Stała współpraca'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
