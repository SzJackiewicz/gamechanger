import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import React from 'react'
import { CoverWithTestimonials } from '@/components/elements/CoverWithTestimonials'
import { ContactForm } from '@/components/elements/ContactForm'
import { PartnersLogs } from '@/components/sections/PartnersLogs'
import { SupportUs } from '@/components/sections/SupportUs/SupportUs'
import { buttonsDataSupportPage } from '@/components/sections/SupportUs/data'

type SupportUsLayoutProps = {
  withForm?: boolean
  articleText?: string
  partners?: boolean
  pricingComponent?: boolean
  img?: string
  title?: string
  subtitle?: string
  headCopy?: string
}

export const SupportUsLayout = ({
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
      <Layout>
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
            className='col-xl-10 row mx-auto wow animate__animated animate__fadeInUp'
            data-wow-delay='.3s'
          >
            <SupportUs buttonsData={buttonsDataSupportPage} />
          </div>
        )}
        <PartnersLogs />
      </Layout>
    </>
  )
}
