import React from 'react'
import Layout from '../../components/layout/Layout'
import SingleContent from '@/components/sections/SingleContent'
import { useRouter } from 'next/router'
import { heroSectionData } from '@/public/assets/data/heroSection/heroSectionData'
import { SupportUs } from '@/components/sections/SupportUs'

export default function BlogDetails() {
  const router = useRouter()

  return (
    <Layout>
      <div className='cover-home3'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-1' />
            <div className='col-xl-10 col-lg-12'>
              <div className='row mt-50 align-items-end'>
                <div className='col-lg-8 m-auto text-center'>
                  <h3 className='color-linear'>{heroSectionData[Number(router.query.slug)].title}</h3>
                </div>
              </div>
              <div className='mt-30'>
                <div className='mb-3 center-flex'>
                  <img
                    src={`${heroSectionData[Number(router.query.slug)].cover}`}
                    alt='Genz'
                  />
                </div>
                <div
                  className='col-lg-9 m-auto'
                  data-wow-delay='.2s'
                >
                  <div className='row mb-40'>
                    <div className='col-md-6 mb-10' />
                  </div>
                  <SingleContent
                    data-wow-delay='.2s'
                    articleId={router.query.slug}
                  />
                </div>
              </div>
            </div>
          </div>
          <SupportUs />
        </div>
      </div>
    </Layout>
  )
}
