import React from 'react'
import Head from 'next/head'
import { PortfolioFilter } from '../../components/elements/PortfolioFilter'
import Layout from '../../components/layout/Layout'
import { Navigation } from '../../types/types'

export default function SupportersPage({ navigation }: { navigation: Navigation }) {
  return (
    <>
      <Head>
        <title>Wspierają nas</title>
      </Head>
      <Layout navigation={navigation}>
        <div className='cover-home1'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-1' />
              <div className='col-xl-10 col-lg-12'>
                <div className='text-center mt-70 mb-50'>
                  <h2 className='color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp'>Wspierający</h2>
                  <p className='text-lg color-gray-500 wow animate__animated animate__fadeInUp'>
                    The convention is the main event of the year for professionals in
                    <br className='d-none d-lg-block' />
                    the world of design and architecture.
                  </p>
                </div>
                <PortfolioFilter col={6} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
