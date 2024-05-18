'use server'

import React from 'react'
import { BuyButtonComponent } from '../elements/BuyButtonComponent'

export const BuyButtons = () => {
  return (
    <>
      <div className='box-testimonials-supportus mt-10 mb-20 px-4 animate__fadeIn gap-5 mx-auto'>
        <BuyButtonComponent />
      </div>
    </>
  )
}
