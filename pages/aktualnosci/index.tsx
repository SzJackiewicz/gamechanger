import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout/Layout'
import { Navigation } from '../../types/types'
import data from '@/utils/blogData2'
import Link from 'next/link'

export default function NewsPage({ navigation }: { navigation: Navigation }) {
  return (
    <>
      <Head>
        <title>Genz - About me</title>
      </Head>
      <Layout navigation={navigation}>
        <div className='cover-home3'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-1' />
              <div className='col-xl-10 col-lg-12'>
                <div className='mt-50 mb-50'>
                  <div className='row mt-50 mb-10'>
                    {data &&
                      data.map((item, i) => (
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
                                <img
                                  src={`assets/imgs/page/homepage3/${item.img}`}
                                  alt='Genz'
                                />
                              </Link>
                            </div>
                            <div className='card-info'>
                              <Link href={`/aktualnosci/${item.id}`}>
                                <h4 className='color-white mt-20'>{item.title} </h4>
                                <h6 className='color-white mt-20'>Podtytuł Podtytuł Podtytuł Podtytuł Podtytuł</h6>
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
      </Layout>
    </>
  )
}
