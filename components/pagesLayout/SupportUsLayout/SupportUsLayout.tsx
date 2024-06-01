import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import React from 'react'
import { CoverWithTestimonials } from '@/components/elements/CoverWithTestimonials'
import { ContactForm } from '@/components/elements/ContactForm'
import { PartnersLogs } from '@/components/sections/PartnersLogs'
import { SupportUs } from '@/components/sections/SupportUs/SupportUs'
import { buttonsDataSupportCycle, buttonsDataSupportPageOneTime } from '@/components/sections/SupportUs/data'

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
              className='col-xl-8 row color-gray-100 mx-auto center-flex text-center font-md-clamp mt-30 mb-20 w-75 wow animate__animated animate__fadeInUp'
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
          <>
            <div
              className='col-xl-10 row mx-auto wow animate__animated animate__fadeInUp'
              data-wow-delay='.3s'
            >
              <SupportUs
                buttonsData={buttonsDataSupportPageOneTime}
                copy='Wparcie jednorazowe'
              />
              <SupportUs
                buttonsData={buttonsDataSupportCycle}
                copy='Wparcie cykliczne'
                subtitle='W przypadku kwoty minimum 100 zł miesięcznie otrzymasz dedykowany certyfikat przyjaciela
              Fundacji, skontaktujemy się z Tobą!'
              />
            </div>
            <div className='center-flex col-xl-8 mx-auto mt-50'>
              <h4 className='color-gray-100 wow animate__animated animate__fadeInUp m-auto font-md-clamp text-center'>
                Odlicz darowiznę od podatku.
              </h4>{' '}
            </div>
            <div className='col-xl-10 mx-auto mt-30 px-4'>
              <h4 className='color-gray-100 wow animate__animated animate__fadeInUpo font-sm-clamp'>
                Zachowaj potwierdzenie przelewu i odlicz 6% (osoby fizyczne) lub 10% (osoby prawne) uzyskanego dochodu przy rozliczaniu
                podatku.
              </h4>
            </div>
            <div className='col-xl-10 mx-auto mt-30 px-4'>
              <h4 className='color-gray-100 wow animate__animated animate__fadeInUp font-sm-clamp'>
                Administratorem („Administrator”) danych osobowych jest Game Changer Foundation z siedzibą w Gdańsku (Aleja Grunwaldzka 413,
                80-306 Gdańsk); e-mail: kontakt@f-gc.pl, tel: 690-301-110. Dane osobowe będą przetwarzane przez Administratora w celu
                przyjęcia i rozliczenia wpłaconej darowizny.
              </h4>
            </div>
            <div className='center-flex col-xl-10 mx-auto mt-30 px-4'>
              <h4 className='color-gray-100 wow animate__animated animate__fadeInUp font-sm-clamp'>
                Prawo dostępu do treści swoich danych, ich modyfikacji lub usunięcia, a także cofnięcia udzielonej zgody na przetwarzanie
                danych w dowolnym momencie. Podanie danych jest dobrowolne oraz niezbędne do przekazania darowizny. Więcej w Polityce
                prywatności (link, plik w załączniku)
              </h4>
            </div>
          </>
        )}
        <PartnersLogs />
      </Layout>
    </>
  )
}
