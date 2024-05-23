'use server'

import { BuyButtonComponent } from '@/components/elements/BuyButton/BuyButtonComponent'
import { ButtonData } from './data'

export const SupportUs = ({ buttonsData }: { buttonsData: ButtonData[] }) => {
  return (
    <>
      <div className='list-logos mb-10'>
        <div className='container'>
          <div className='center-flex mt-50'>
            <h3 className='color-linear d-inline-block wow animate__animated animate__fadeInUp m-auto'>Wesprzyj nas</h3>
          </div>
          <div className='row center-flex-between'>
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
