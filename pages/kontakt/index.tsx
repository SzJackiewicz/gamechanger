'use server'

import Head from 'next/head'
import Layout from '../../components/layout/Layout'
import React from 'react'
import { ContactForm } from '@/components/elements/ContactForm'

export default function PageContact() {
  return (
    <>
      <Head>
        <title>Gamechanger Kontact</title>
      </Head>
      <Layout>
        <div className='row justify-content-center mt-10'>
          <div className='col-xxl-4 px-4'>
            <div className='text-center'>
              <h3 className='color-linear d-inline-block mb-30'>Zostań partnerem zmiany i pomagaj razem z nami.</h3>
              <p className='text-xl color-gray-500'>
                Game Changer Fundacja działa na rzecz promowania zdrowia psychicznego poprzez sport i aktywność, zapewniając wsparcie dla
                osób walczących z depresją i innymi zaburzeniami. Dołączając do naszej inicjatywy, wspierasz walkę o równowagę psychiczną i
                stwarzasz bezpieczne środowisko do rozmów o emocjach oraz wyzwaniach.
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
          <div className='form-contact col-xxl-4 px-4 '>
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
