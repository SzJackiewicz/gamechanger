import Head from 'next/head'
import Layout from '../components/layout/Layout'
import React from 'react'
import { Navigation } from '../types/types'
import { MainSection } from '@/components/sections/MainSection'
import { PartnersLogs } from '@/components/sections/PartnersLogs'
import { SupportUs } from '@/components/sections/SupportUs'
import { SupportingUs } from '@/components/sections/SupportingUs'

export default function Home({ navigation }: { navigation: Navigation }) {
  return (
    <>
      <Head>
        <title>Gamechanger Fundacja</title>
      </Head>
      <Layout navigation={navigation}>
        <div className='cover-home1'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12 col-lg-12'>
                <div className='col-xl-12'>
                  <MainSection />
                </div>
                <div className='col-xl-12'>
                  <SupportUs />
                </div>
                <div className='col-xl-12'>
                  <SupportingUs />
                </div>
                <div className='col-xl-12'>
                  <PartnersLogs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
