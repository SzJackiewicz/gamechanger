'use server'

import { BuyButton } from '../elements/BuyButton'

export const SupportUs = () => {
  return (
    <>
      <div className='list-logos mb-10'>
        <div className='container'>
          <div className='center-flex mt-50'>
            <h3 className='color-linear d-inline-block wow animate__animated animate__fadeInUp m-auto '>Wesprzyj nas</h3>
          </div>
          <div className='row center-flex-between'>
            <BuyButton
              slug='https://donate.stripe.com/3cs03M0RCfh9cX6dQQ'
              title='Wsparcie jednorazowe'
              price='25,00'
              buttonTitle='Przekaż darowiznę'
            />
            <BuyButton
              slug='https://buy.stripe.com/3cseYG9o82une1adQU'
              title='Wsparcie cykliczne'
              price='25,00'
              buttonTitle='Przekaż darowiznę'
              cycle
            />
            <BuyButton
              slug='/wesprzyj-nas'
              title='Pozostałe formy wsparcia'
              buttonTitle='Wesprzyj nas'
            />
          </div>
        </div>
      </div>
    </>
  )
}
