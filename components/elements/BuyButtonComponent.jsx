import React from 'react'
import styled from 'styled-components'

export function BuyButtonComponent() {
  return (
    <>
      <StripeButtonContainer
        as='stripe-buy-button'
        buy-button-id='buy_btn_1PESdSRquiX5mroYK64El7Tk'
        publishable-key='pk_live_51P6U0iRquiX5mroYEDznLjQgM9VvPInhMnA88DJdi7AYzPINHT2cfU0i8jAgPwB1weqCxtNrsoDTmoMOGGpUDdPh009M6R2VSs'
      />
      <StripeButtonContainer
        as='stripe-buy-button'
        buy-button-id='buy_btn_1PGGigRquiX5mroYd9yD73FU'
        publishable-key='pk_live_51P6U0iRquiX5mroYEDznLjQgM9VvPInhMnA88DJdi7AYzPINHT2cfU0i8jAgPwB1weqCxtNrsoDTmoMOGGpUDdPh009M6R2VSs'
        style={{ filter: 'none !important', backgroundColor: '#1a1a1a !important' }}
      />
      <StripeButtonContainer
        as='stripe-buy-button'
        buy-button-id='buy_btn_1PH1hQRquiX5mroYiQoUA6Ws'
        publishable-key='pk_live_51P6U0iRquiX5mroYEDznLjQgM9VvPInhMnA88DJdi7AYzPINHT2cfU0i8jAgPwB1weqCxtNrsoDTmoMOGGpUDdPh009M6R2VSs'
        style={{ filter: 'none !important', backgroundColor: '#1a1a1a !important' }}
      />
    </>
  )
}

const StripeButtonContainer = styled.div`
  filter: none;
  background-color: #1a1a1a !important;

  & * {
    background-color: #1a1a1a !important;
    background: #1a1a1a !important;
    filter: none !important;
    box-shadow: none !important;
  }
`
