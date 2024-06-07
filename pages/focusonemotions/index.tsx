import React from 'react'
import Head from 'next/head'
import { PortfolioFilter } from '../../components/elements/PortfolioFilter'
import Layout from '../../components/layout/Layout'
import { PartnersLogs } from '@/components/sections/PartnersLogs'
import { CoverWithTestimonials } from '@/components/elements/CoverWithTestimonials'

export default function SupportersPage() {
  return (
    <>
      <Head>
        <title>Wspierają nas</title>
      </Head>
      <Layout>
        <CoverWithTestimonials img={'/assets/imgs/page/focusOnEmotions/baner.png'} />
        <div className='container'>
          <div className='row'>
            <div className='col-xl-1' />
            <div className='col-xl-10 col-lg-12'>
              <div className='text-center mt-10'>
                <p className='font-md-clamp color-gray-500 wow animate__animated animate__fadeInUp'>
                  Celem akcji <span className='main-color-text'>#FocusOnEmotions</span> jest pokazanie różnych emocji, jakie towarzyszą nam
                  każdego dnia.
                </p>
              </div>
              <div className='text-center mt-20'>
                <p className='font-md-clamp color-gray-500 wow animate__animated animate__fadeInUp'>
                  Sportowcy, organizacje sportowe i nasi partnerzy uwieczniają za pomocą przekazanego przez nas aparatu analogowego kilka
                  dni zwyczajnych chwil: w domu, w podróży, na treningu, w szatni. Samemu i z bliskimi. Momenty radości i te mniej łatwe.
                  Uchwycone kadry są takimi jakimi są - nie zawsze ostre, wyraźne, w idealnym świetle, ale autentyczne i prawdziwe.
                </p>
              </div>
              <div className='text-center mt-20'>
                <p className='font-md-clamp color-gray-500 wow animate__animated animate__fadeInUp'>
                  Zależy nam, żeby pokazanie filmów zmontowanych z tych ujęć, stało się punktem wyjścia do rozmów o istotności zdrowia
                  psychicznego. Sportowcy przystępując do akcji, dołączają do grona osób, dla których rozmowa o stanie psychicznym i
                  mentalnym jest niezwykle ważna.
                </p>
              </div>
              <div className='text-center mt-30'>
                <h2 className='color-linear d-inline-block wow animate__animated animate__fadeInUp'>Dołączyli do nas:</h2>
              </div>
              <PortfolioFilter col={6} />
            </div>
          </div>
        </div>
        <PartnersLogs />
      </Layout>
    </>
  )
}
