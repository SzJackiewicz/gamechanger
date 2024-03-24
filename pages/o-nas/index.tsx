import React from 'react'
import Head from 'next/head'
import Accordion from '../../components/elements/Accordion'
import Layout from '../../components/layout/Layout'
import { Testimonial } from '../../components/slider/Testimonial'
import { PricingTable } from '../../components/sections/PricingTable'
import MyServices from '../../components/sections/MyServices'
import { PartnersLogs } from '../../components/sections/PartnersLogs'
import { Navigation } from '../../types/types'

export default function PageAbout({ navigation }: { navigation: Navigation }) {
  return (
    <>
      <Head>
        <title>Genz - About me</title>
      </Head>
      <Layout navigation={navigation}>
        <div className='cover-home1'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-1' />
              <div className='col-xl-10 col-lg-12'>
                <MyServices />
                <div className='text-center mt-70 mb-50'>
                  <h2 className='color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp'>My Latest Projects</h2>
                  <p className='text-lg color-gray-500 wow animate__animated animate__fadeInUp'>
                    The convention is the main event of the year for professionals in
                    <br className='d-none d-lg-block' />
                    the world of design and architecture.
                  </p>
                </div>
                <PricingTable />
                <div className='text-center mt-30'>
                  <h2
                    className='color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp'
                    data-wow-delay='.0s'
                  >
                    FAQs
                  </h2>
                </div>
                <div className='box-faqs mb-70'>
                  <Accordion />
                </div>
                <Testimonial />
                <PartnersLogs />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
