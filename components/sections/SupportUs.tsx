'use server'

import { BuyButtons } from '../slider/BuyButtons'

export const SupportUs = () => {
  return (
    <>
      <div className='list-logos mb-10'>
        <div className='container'>
          <div className='center-flex mt-50'>
            <h3 className='color-linear d-inline-block wow animate__animated animate__fadeInUp m-auto '>Wesprzyj nas</h3>
          </div>
          <div className='row'>
            <BuyButtons />
          </div>
        </div>
      </div>
    </>
  )
}
