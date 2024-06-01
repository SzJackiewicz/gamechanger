import Head from 'next/head'
import Layout from '../components/layout/Layout'
import React from 'react'
import { MainSection } from '@/components/sections/MainSection/MainSection'
import { PartnersLogs } from '@/components/sections/PartnersLogs'
import { FocusOnEmotions } from '@/components/sections/FocusOnEmotions'
import { SupportUs } from '@/components/sections/SupportUs/SupportUs'
import { buttonsDataMainPage } from '@/components/sections/SupportUs/data'

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
                <SupportUs buttonsData={buttonsDataMainPage} />
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
