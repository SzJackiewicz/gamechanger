import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout/Layout'
import { HelpLines } from '@/components/sections/needHelpData'
import { CoverWithTestimonials } from '@/components/elements/CoverWithTestimonials'
import { PartnersLogs } from '@/components/sections/PartnersLogs'

export default function HelpPage() {
  return (
    <>
      <Head>
        <title>Pomoc</title>
      </Head>
      <Layout>
        <div className='cover-home3'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-1' />
              <div className='col-xl-10 col-lg-12'>
                <div className='row mt-30'>
                  <div className='image-detail mb-30'>
                    <CoverWithTestimonials img='/assets/imgs/page/pomoc/pomoc.png' />
                  </div>
                  <div className='col-lg-10 m-auto'>
                    <HelpLines />
                  </div>
                </div>
              </div>
            </div>
            <PartnersLogs />
          </div>
        </div>
      </Layout>
    </>
  )
}
