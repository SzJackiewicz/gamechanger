import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import React from 'react'
import { Navigation } from '../../../types/types'
import { CoverWithTestimonials } from '@/components/elements/CoverWithTestimonials'
import { ContactForm } from '@/components/elements/ContactForm'
import { PartnersLogs } from '@/components/sections/PartnersLogs'
import { PricingTable } from '@/components/sections/PricingTable'

type SupportUsLayoutProps = {
  withForm?: boolean
  articleText?: string
  navigation: Navigation
  partners?: boolean
  pricingComponent?: boolean
  img?: string
  title?: string
  subtitle?: string
  headCopy?: string
}

export const SupportUsLayout = ({
  navigation,
  withForm,
  articleText,
  img,
  title,
  pricingComponent,
  partners,
  subtitle,
  headCopy = 'Wesprzyj nas',
}: SupportUsLayoutProps) => {
  return (
    <>
      <Head>
        <title>{headCopy}</title>
      </Head>
      <Layout navigation={navigation}>
        <div className='row'>
          <div className='col-xl-12 '>
            <CoverWithTestimonials
              title={title}
              subtitle={subtitle}
              img={img}
            />
          </div>
        </div>
        {articleText && (
          <>
            <div
              className='col-xl-8 row mx-auto center-flex text-center font-md-clamp color-gray-500 mt-30 mb-20 w-75 wow animate__animated animate__fadeInUp'
              data-wow-delay='.2s'
            >
              {articleText}
            </div>
            <div
              className='col-xl-8 row mx-auto center-flex text-center font-md-clamp color-gray-500 mt-30 mb-20 w-75 wow animate__animated animate__fadeInUp'
              data-wow-delay='.2s'
            >
              {articleText}
            </div>
            <div
              className='col-xl-8 row mx-auto center-flex text-center font-md-clamp color-gray-500 mt-30 mb-20 w-75 wow animate__animated animate__fadeInUp'
              data-wow-delay='.2s'
            >
              {articleText}
            </div>
          </>
        )}
        {partners && (
          <div className='col-xl-8 row mx-auto'>
            <PartnersLogs />
          </div>
        )}
        {withForm && (
          <div className='col-xl-8 row mx-auto center-flex text-center'>
            <ContactForm />
          </div>
        )}
        {pricingComponent && (
          <div
            className='col-xl-8 row mx-auto wow animate__animated animate__fadeInUp'
            data-wow-delay='.3s'
          >
            <PricingTable />
          </div>
        )}
      </Layout>
    </>
  )
}
