'use server'

import React from 'react'
import Head from 'next/head'
import Accordion from '../../components/elements/Accordion'
import Layout from '../../components/layout/Layout'
import { BoardMembers } from '../../components/sections/BoardMembers'
import { PartnersLogs } from '../../components/sections/PartnersLogs'
import { CoverWithTestimonials } from '@/components/elements/CoverWithTestimonials'

export default function AboutPage() {
  const boardMembers = [
    {
      name: 'Jan Konikiewicz',
      role: 'Prezes Zarządu',
      img: '/assets/imgs/avatars/Jan_Konikiewicz.webp',
    },
    {
      name: ' Karol Stawicki',
      role: 'Członek Zarządu',
      img: '/assets/imgs/avatars/Karol_Stawicki.webp',
    },
    {
      name: 'Krystian Jaworski',
      role: 'Członek Zarządu',
      img: '/assets/imgs/avatars/Krystian_Jaworski.webp',
    },
  ]

  const councilMembers = [
    {
      name: 'Maciej Kowalski',
      role: 'Przewodniczący Rady',
      img: '/assets/imgs/avatars/Maciej_Kowalski.webp',
    },
    {
      name: 'Aaron Cel',
      role: 'Członek Rady',
      img: '/assets/imgs/avatars/Aaron_Cel.webp',
    },
    {
      name: 'Krystian Plech',
      role: 'Członek Rady',
      img: '/assets/imgs/avatars/Krystian_Plech.webp',
    },
  ]

  const otherMembers = [
    {
      name: 'Katarzyna Górska',
      img: '/assets/imgs/avatars/Katarzyna_Górska.webp',
    },
    {
      name: 'Mateusz Stępień',
      img: '/assets/imgs/avatars/Mateusz_Stępień.webp',
    },
    {
      name: 'Jan Benesz',
      img: '/assets/imgs/avatars/Jan_Benesz.webp',
    },
  ]

  return (
    <>
      <Head>
        <title>Zarząd</title>
      </Head>
      <Layout>
        <div className='container'>
          <CoverWithTestimonials img='/assets/imgs/page/o-nas/aboutus.png' />
          <div className='row'>
            <div className='col-xl-12 col-lg-12 margin-auto'>
              <div
                className='box-quote'
                data-wow-delay='.1s'
              >
                <h4
                  className='color-gray-500 text-cursive font-md-clamp'
                  data-wow-delay='.3s'
                >
                  Według Światowej Organizacji Zdrowia (WHO), co ósma osoba na świecie zmaga się z jedną z form zaburzeń psychicznych, a na
                  podstawie jej prognoz - do 2030 roku depresja będzie najczęściej rozpoznawaną chorobą na świecie
                </h4>
              </div>

              <h4
                className='color-gray-500 font-md-clamp'
                data-wow-delay='.3s'
              >
                Naszą misją jest promowanie zdrowia psychicznego poprzez sport i w obszarze sportu.
              </h4>
              <br />
              <br />
              <p className='font-sm-clamp color-gray-500'>
                W świecie, gdzie presja zwycięstwa często przytłacza, istnieje miejsce dla każdego, kto szuka równowagi. Nie chcemy, żeby
                ktokolwiek został sam w swojej walce. Przełamujemy tabu, dodajemy otuchy i odwagi. Mówimy otwarcie o problemach i szukamy
                rozwiązań.
              </p>
              <br />
              <p className='font-sm-clamp color-gray-500'>
                Wierzymy, że sport i aktywność są ważnymi elementami w pracy nad równowagą mentalną i psychiczną człowieka oraz mogą być
                platformą komunikacji i nośnikiem przekazu.
              </p>
              <br />
              <p className='font-sm-clamp color-gray-500'>
                Sport może stać się naszym sprzymierzeńcem w najważniejszej walce - o samego siebie. Razem tworzymy środowisko, w którym
                każdy może czuć się bezpiecznie, rozmawiając o swoich uczuciach, problemach, wyzwaniach i sukcesach.
              </p>
              <br />
              <p className='font-sm-clamp color-gray-500'>
                Działania realizujemy m.in. poprzez kampanie propagujące zdrowie psychiczne; organizację form edukacji o zdrowiu psychicznym
                z wykorzystaniem zajęć sportowych; organizację i wsparcie akcji promujących i popularyzujących wolontariat, zasady wzajemnej
                pomocy, tolerancję; działalność oświatową i edukacyjną.
              </p>
              <br />
              <p className='text-bolder font-sm-clamp color-gray-500'>Dołącz do nas i zostań partnerem tej zmiany!</p>
              <div className='col-xl-10 col-lg-12 margin-auto'>
                <BoardMembers
                  title='Zarząd'
                  members={boardMembers}
                />
                <BoardMembers
                  title='Rada fundacji'
                  members={councilMembers}
                />
                <BoardMembers
                  title='Team'
                  members={otherMembers}
                />

                <div className='box-faqs mb-70 mt-40'>
                  <Accordion />
                </div>
              </div>
              <PartnersLogs />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
