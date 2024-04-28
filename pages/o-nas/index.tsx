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
    },
    {
      name: ' Karol Stawicki',
      role: 'Członek Zarządu',
    },
    {
      name: 'Krystian Jaworski',
      role: 'Członek Zarządu',
    },
  ]

  const councilMembers = [
    {
      name: 'Maciej Kowalski',
      role: 'Przewodniczący Rady',
    },
    {
      name: 'Aaron Cel',
      role: 'Członek Rady',
    },
    {
      name: 'Krystian Plech',
      role: 'Członek Rady',
    },
  ]

  const otherMembers = [
    {
      name: 'Katarzyna Górska',
    },
    {
      name: 'Mateusz Stępień',
    },
    {
      name: 'Jan Benesz',
    },
    {
      name: 'Marcin Woźniak',
    },
    {
      name: 'Adrian Łowkajtis',
    },
    {
      name: 'Bartosz Janus',
    },
  ]

  return (
    <>
      <Head>
        <title>Zarząd</title>
      </Head>
      <Layout>
        <div className='cover-home1'>
          <div className='container'>
            <CoverWithTestimonials title='Game Changer Foundation' />
            <div className='row'>
              <div className='col-xl-10 col-lg-10 margin-auto'>
                <div
                  className='box-quote'
                  data-wow-delay='.1s'
                >
                  <h4
                    className='color-gray-500 text-cursive'
                    data-wow-delay='.3s'
                  >
                    Według Światowej Organizacji Zdrowia (WHO), co ósma osoba na świecie zmaga się z jedną z form zaburzeń psychicznych, a
                    na podstawie jej prognoz - do 2030 roku depresja będzie najczęściej rozpoznawaną chorobą na świecie
                  </h4>
                </div>

                <h4
                  className='color-gray-500'
                  data-wow-delay='.3s'
                >
                  Naszą misją jest promowanie zdrowia psychicznego poprzez sport i w obszarze sportu.
                </h4>
                <br />
                <br />
                <p className='text-xl color-gray-500'>
                  W świecie, gdzie presja zwycięstwa często przytłacza, istnieje miejsce dla każdego, kto szuka równowagi. Nie chcemy, żeby
                  ktokolwiek został sam w swojej walce. Przełamujemy tabu, dodajemy otuchy i odwagi. Mówimy otwarcie o problemach i szukamy
                  rozwiązań.
                </p>
                <br />
                <p className='text-xl color-gray-500'>
                  Wierzymy, że sport i aktywność są ważnymi elementami w pracy nad równowagą mentalną i psychiczną człowieka oraz mogą być
                  platformą komunikacji i nośnikiem przekazu.
                </p>
                <br />
                <p className='text-xl color-gray-500'>
                  Sport może stać się naszym sprzymierzeńcem w najważniejszej walce - o samego siebie. Razem tworzymy środowisko, w którym
                  każdy może czuć się bezpiecznie, rozmawiając o swoich uczuciach, problemach, wyzwaniach i sukcesach.
                </p>
                <br />
                <p className='text-xl color-gray-500'>
                  Działania realizujemy m.in. poprzez kampanie propagujące zdrowie psychiczne; organizację form edukacji o zdrowiu
                  psychicznym z wykorzystaniem zajęć sportowych; organizację i wsparcie akcji promujących i popularyzujących wolontariat,
                  zasady wzajemnej pomocy, tolerancję; działalność oświatową i edukacyjną.
                </p>
                <br />
                <p className='text-bolder text-xl color-gray-500'>Dołącz do nas i zostań partnerem tej zmiany!</p>
                <BoardMembers
                  title='Zarząd'
                  members={boardMembers}
                />
                <BoardMembers
                  title='Rada fundacji'
                  members={councilMembers}
                />
                <BoardMembers
                  title='Pomagają razem z nami'
                  members={otherMembers}
                />
                <div className='text-center mt-30'>
                  <h2
                    className='color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp'
                    data-wow-delay='.0s'
                  >
                    FAQs
                  </h2>
                </div>
                <div className='box-faqs mb-70'>
                  <Accordion />
                </div>
                <PartnersLogs />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
