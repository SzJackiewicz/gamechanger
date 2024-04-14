import React from 'react'
import Head from 'next/head'
import Accordion from '../../components/elements/Accordion'
import Layout from '../../components/layout/Layout'
import { Testimonial } from '../../components/slider/Testimonial'
import { BoardMembers } from '../../components/sections/BoardMembers'
import { PartnersLogs } from '../../components/sections/PartnersLogs'
import { Navigation } from '../../types/types'
import { CoverWithTestimonials } from '@/components/elements/CoverWithTestimonials'

export default function AboutPage({ navigation }: { navigation: Navigation }) {
  return (
    <>
      <Head>
        <title>Zarząd</title>
      </Head>
      <Layout navigation={navigation}>
        <div className='cover-home1'>
          <div className='container'>
            <CoverWithTestimonials
              title='Treść mówiąca o naszej misji'
              subtitle='Subtytuł kontynuujący treść dotyczącą misji fundacji'
            />
            <div className='row'>
              <div className='col-xl-10 col-lg-10 margin-auto'>
                <BoardMembers title='Zarząd' />
                <BoardMembers title='Rada fundacji' />
                <BoardMembers title='Pomagają razem z nami' />
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
