import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout/Layout'
import Link from 'next/link'
import { PartnersLogs } from '@/components/sections/PartnersLogs'
import Image from 'next/image'
import { base64Blur } from '@/components/elements/base64ImageBlur'
import { getBlogsData } from '@/lib/api/blog'

export default function NewsPage() {
  const { allPosts, isLoading, error } = getBlogsData()

  if (isLoading) return <div />
  if (error) return <div />

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
                    {allPosts &&
                      allPosts.map((item, i) => (
                        <div
                          className='col-lg-6'
                          key={i}
                        >
                          <div
                            className='card-blog-1 hover-up wow animate__animated animate__fadeIn mb-20'
                            data-wow-delay='.2s'
                          >
                            <div className='card-image mb-20'>
                              <Link href={`/aktualnosci/${item.slug}`}>
                                <Image
                                  width={500}
                                  height={350}
                                  style={{ height: 'auto' }}
                                  src={`${item.coverImage.url}`}
                                  alt={`${item.subtitle}`}
                                  placeholder='blur'
                                  blurDataURL={base64Blur}
                                />
                              </Link>
                            </div>
                            <div className='card-info max-width-100'>
                              <Link href={`/aktualnosci/${item.slug}`}>
                                <h4 className='color-white mt-20 font-md-clamp'>{item.title}</h4>
                                <div>
                                  <h6 className='color-gray-200 mt-xl-20 mt-2 font-sm-clamp ellipsis'>{item.subtitle}</h6>
                                </div>
                              </Link>
                              <div className='row align-items-center mt-25'>
                                <div className='col-7' />
                                <div className='col-5 text-end'>
                                  <Link
                                    className='readmore color-gray-500 text-sm'
                                    href={`/aktualnosci/${item.slug}`}
                                  >
                                    <span className='font-sm-clamp'>Czytaj</span>
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
