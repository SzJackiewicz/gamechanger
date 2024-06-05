import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout/Layout'
import { heroSectionData } from '@/public/assets/data/heroSection/heroSectionData'
import Link from 'next/link'
import { PartnersLogs } from '@/components/sections/PartnersLogs'
import Image from 'next/image'
import { base64Blur } from '@/components/elements/base64ImageBlur'

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>O nas</title>
      </Head>
      <Layout>
        <div className='cover-home3'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-1' />
              <div className='col-xl-10 col-lg-12'>
                <div className='mt-50 mb-50'>
                  <div className='row mt-50 mb-10'>
                    {heroSectionData &&
                      heroSectionData.map((item, i) => (
                        <div
                          className='col-lg-6'
                          key={i}
                        >
                          <div
                            className='card-blog-1 hover-up wow animate__animated animate__fadeIn'
                            data-wow-delay='.2s'
                          >
                            <div className='card-image mb-20'>
                              <Link href={`/aktualnosci/${item.id}`}>
                                <Image
                                  width={500}
                                  height={500}
                                  src={`${item.cover}`}
                                  alt='okładka artykułu'
                                  placeholder='blur'
                                  blurDataURL={base64Blur}
                                />
                              </Link>
                            </div>
                            <div className='card-info'>
                              <Link href={`/aktualnosci/${item.id}`}>
                                <h4 className='color-white mt-20 font-md-clamp'>{item.title}</h4>
                                <div>
                                  <h6 className='color-gray-200 mt-xl-20 mt-2 font-sm-clamp ellipsis'>{item.subtitle}</h6>
                                </div>
                              </Link>
                              <div className='row align-items-center mt-25'>
                                <div className='col-7'>
                                  <div className='box-author'>
                                    <div className='author-info'>
                                      <span className='color-gray-700 text-sm'>{item.date}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className='col-5 text-end'>
                                  <Link
                                    className='readmore color-gray-500 text-sm'
                                    href={`/aktualnosci/${item.id}`}
                                  >
                                    <span>Czytaj</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PartnersLogs />
      </Layout>
    </>
  )
}
