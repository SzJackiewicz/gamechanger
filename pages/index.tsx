import Head from 'next/head'
import Layout from '../components/layout/Layout'
import React from 'react'
import { MainSection } from '@/components/sections/MainSection/MainSection'
import { PartnersLogs } from '@/components/sections/PartnersLogs'
import { SupportUs } from '@/components/sections/SupportUs'
import { FocusOnEmotions } from '@/components/sections/FocusOnEmotions'

export default function Home() {
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
                <SupportUs />
              </div>
              <div
                className='col-xl-12 wow animate__animated animate__fadeIn'
                data-wow-delay='.2s'
              >
                <FocusOnEmotions />
              </div>
              <div
                className='col-xl-12 wow animate__animated animate__fadeIn'
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
