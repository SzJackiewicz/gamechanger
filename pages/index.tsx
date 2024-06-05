import Head from 'next/head'
import Layout from '../components/layout/Layout'
import React from 'react'
import { MainSection } from '@/components/sections/MainSection/MainSection'
import { PartnersLogs } from '@/components/sections/PartnersLogs'
import { FocusOnEmotions } from '@/components/sections/FocusOnEmotions'
import { SupportUs } from '@/components/sections/SupportUs/SupportUs'
import { StripeButtonWrapper } from '@/components/elements/BuyButton/StripeButtonWrapper'
import Link from 'next/link'

export default function Home() {
  const focusOnEmotionsData: unknown[] = []
  return (
    <>
      <Head>
        <title>Gamechanger Fundacja</title>
      </Head>
      <Layout>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12 col-lg-12'>
              <div
                className='col-xl-12 wow animate__animated animate__fadeIn'
                data-wow-delay='.3s'
              >
                <MainSection />
              </div>
              <div
                className='col-xl-12 wow animate__animated animate__fadeIn'
                data-wow-delay='.3s'
              >
                <SupportUs>
                  <StripeButtonWrapper>
                    <stripe-buy-button
                      buy-button-id='buy_btn_1PGGigRquiX5mroYd9yD73FU'
                      publishable-key='pk_live_51P6U0iRquiX5mroYEDznLjQgM9VvPInhMnA88DJdi7AYzPINHT2cfU0i8jAgPwB1weqCxtNrsoDTmoMOGGpUDdPh009M6R2VSs'
                    />
                  </StripeButtonWrapper>
                  <StripeButtonWrapper>
                    <stripe-buy-button
                      buy-button-id='buy_btn_1PESdSRquiX5mroYK64El7Tk'
                      publishable-key='pk_live_51P6U0iRquiX5mroYEDznLjQgM9VvPInhMnA88DJdi7AYzPINHT2cfU0i8jAgPwB1weqCxtNrsoDTmoMOGGpUDdPh009M6R2VSs'
                    />
                  </StripeButtonWrapper>
                  <StripeButtonWrapper>
                    <div className='iconWithTextContainer'>
                      <Link
                        className='font-md-clamp main-color-text'
                        href='/wesprzyj-nas'
                      >
                        inne formy wsparcia
                      </Link>
                      <i
                        className='pi pi-arrow-circle-right'
                        style={{ fontSize: '1.5rem' }}
                      />
                    </div>
                  </StripeButtonWrapper>
                </SupportUs>
              </div>
              {focusOnEmotionsData && focusOnEmotionsData.length > 0 && (
                <div
                  className='col-xl-12 wow animate__animated animate__fadeIn'
                  data-wow-delay='.2s'
                >
                  <FocusOnEmotions data={focusOnEmotionsData} />
                </div>
              )}
              <div
                className='col-xl-12 wow animate__animated animate__fadeIn mt-20'
                data-wow-delay='.2s'
              >
                <PartnersLogs />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
