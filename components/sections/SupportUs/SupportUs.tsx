'use server'

import { BuyButtonComponent } from '@/components/elements/BuyButton/BuyButtonComponent'
import { ButtonData } from './data'

export type SupportUsProps = {
  buttonsData: ButtonData[]
  copy?: string
  subtitle?: string
}

export const SupportUs = ({ buttonsData, copy, subtitle }: SupportUsProps) => {
  return (
    <>
      <div className='list-logos mb-10'>
        <div className='container'>
          <div className='center-flex mt-50'>
            <h3 className='color-linear d-inline-block wow animate__animated animate__fadeInUp m-auto text-center'>{copy}</h3>
          </div>
          <div className='center-flex mt-30'>
            <h4 className='color-gray-100 wow animate__animated animate__fadeInUp m-auto font-md-clamp text-center'>{subtitle}</h4>
          </div>
          <div className='row enter-flex-between'>
            {buttonsData &&
              buttonsData.map((buttonData, index) => (
                <BuyButtonComponent
                  small={buttonsData.length > 3 ? true : false}
                  key={index}
                  slug={buttonData.slug}
                  title={buttonData.title}
                  price={buttonData.price}
                  buttonTitle={buttonData.buttonTitle}
                  cycle={buttonData.cycle}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
