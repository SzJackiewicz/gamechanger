'use server'

import { Supporters } from '../slider/Supporters'

export const FocusOnEmotions = () => {
  return (
    <>
      <div className='list-logos mb-30'>
        <div className='container'>
          <div className='row'>
            <div className='swiper-container swiper-group-1'>
              <Supporters title='#FocusOnEmotions' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}