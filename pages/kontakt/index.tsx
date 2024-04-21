'use server'

import Head from 'next/head'
import Layout from '../../components/layout/Layout'
import React from 'react'
import { Navigation } from '../../types/types'
import { ContactForm } from '@/components/elements/ContactForm'

export default function PageContact({ navigation }: { navigation: Navigation }) {
  return (
    <>
      <Head>
        <title>Gamechanger Kontact</title>
      </Head>
      <Layout navigation={navigation}>
        <div className='row align-content-center justify-content-center align-items-baseline mx-5'>
          <div className='col-xxl-4'>
            <div className='text-center mt-70'>
              <h3 className='color-linear d-inline-block mb-30'>Skontaktuj się z nami</h3>
              <p className='text-xl color-gray-500'>
                We are AliThemes , a creative and dedicated group of individuals who love web development almost as much as we love our
                customers. We are passionate team with the mission for achieving the perfection in web design. All designs are made by love
                with pixel perfect design and excellent coding quality. Speed, security and SEO friendly alway in our mind.
              </p>
            </div>
            <div className='text-center mt-30'>
              <div className='d-inline-block support text-start'>
                (48) 654-430-309
                <br />
                (01) 6532-430-309
              </div>
              <div className='d-inline-block location text-start'>
                contact@gamechanger.com
                <br />
                sales@gamechanger.com
              </div>
              <div className='d-inline-block plane text-start'>
                Grunwaldzka 403
                <br />
                Gdańsk, 80-117
              </div>
            </div>
          </div>
          <div className='form-contact col-xxl-4'>
            <div className='text-center'>
              <h3 className='color-linear d-inline-block mb-10'>Napisz do nas</h3>
            </div>
            <ContactForm />
          </div>
        </div>
      </Layout>
    </>
  )
}
