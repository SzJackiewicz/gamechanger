import React from 'react'
import Layout from '../../components/layout/Layout'
import SingleContent from '@/components/sections/SingleContent'
import { useRouter } from 'next/router'
import { heroSectionData } from '@/public/assets/data/heroSection/heroSectionData'
import { SupportUs } from '@/components/sections/SupportUs/SupportUs'
import { buttonsDataMainPage } from '@/components/sections/SupportUs/data'
import { PartnersLogs } from '@/components/sections/PartnersLogs'

export default function BlogDetails() {
  const router = useRouter()

  return (
    <Layout>
      <div className='cover-home3'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-1' />
            <div className='col-xl-12 col-lg-12'>
              <div className='row mt-50 align-items-end'>
                <div className='col-lg-8 m-auto text-center'>
                  <h3 className='color-linear font-xl-clamp'>{heroSectionData[Number(router.query.slug)]?.title}</h3>
                </div>
              </div>
              <div className='mt-30'>
                <div className='mb-3 center-flex w-75 h-75 m-auto '>
                  <img
                    src={`${heroSectionData[Number(router.query?.slug)]?.cover}`}
                    alt='cover'
                  />
                </div>
                <div
                  className='col-xl-12 col-lg-12 col-md-9 m-auto p-1'
                  data-wow-delay='.2s'
                >
                  <div className='row mb-40'>
                    <div className='col-md-6 mb-10' />
                  </div>
                  <SingleContent
                    data-wow-delay='.2s'
                    articleId={router.query?.slug}
                  />
                </div>
              </div>
            </div>
          </div>
          <SupportUs buttonsData={buttonsDataMainPage} />
          <PartnersLogs />
        </div>
      </div>
    </Layout>
  )
}
