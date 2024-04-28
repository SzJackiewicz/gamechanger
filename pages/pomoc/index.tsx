import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout/Layout'
import { HelpLines } from '@/utils/needHelpData'

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
                <div className='row mt-50 align-items-end'>
                  <div className='col-lg-8 m-auto text-center'>
                    <h2 className='color-linear'>Nie czekaj, zgłoś się po pomoc</h2>
                  </div>
                </div>
                <div className='row mt-30'>
                  <div className='col-lg-12'>
                    <div className='image-detail mb-30'>
                      <img
                        className='bdrd16'
                        src='assets/imgs/page/single/img6.jpg'
                        alt='Genz'
                      />
                    </div>
                  </div>
                  <div className='col-lg-8 m-auto'>
                    <HelpLines />
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
