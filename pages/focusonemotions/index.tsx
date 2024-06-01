import React from 'react'
import Head from 'next/head'
import { PortfolioFilter } from '../../components/elements/PortfolioFilter'
import Layout from '../../components/layout/Layout'
import { PartnersLogs } from '@/components/sections/PartnersLogs'

export default function SupportersPage() {
  return (
    <>
      <Head>
        <title>Wspierają nas</title>
      </Head>
      <Layout>
        <div className='cover-home1'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-1' />
              <div className='col-xl-10 col-lg-12'>
                <div className='text-center mt-70 mb-50'>
                  <h2 className='color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp'>Wspierający</h2>
                  <p className='text-lg color-gray-500 wow animate__animated animate__fadeInUp'>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  </p>
                </div>
                <PortfolioFilter col={6} />
              </div>
            </div>
          </div>
        </div>
        <PartnersLogs />
      </Layout>
    </>
  )
}
