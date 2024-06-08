'use server'

import React from 'react'
import Head from 'next/head'
import Accordion from '../../components/elements/Accordion'
import Layout from '../../components/layout/Layout'
import { BoardMembers } from '@/components/sections/BoardMembers'
import { PartnersLogs } from '@/components/sections/PartnersLogs'
import { CoverWithTestimonials } from '@/components/elements/CoverWithTestimonials'
import {getTeamData, Person} from "@/lib/api/getTeamData";

export default function AboutPage() {
  const {allPeople, isLoading, error } = getTeamData();

  if (isLoading) return <div/>;
  if (error || !allPeople) return <div/>;

  const councilMembers: Person[] = [];
  const boardMembers: Person[] = [];
  const otherMembers: Person[] = [];

  const councilIds = ['KoGauPXfTW2ecT4p6c9Vpw', 'Ksl1IeW4Q6W_0yETjijvmQ'];
  const boardIds = ['JuaaifcgTNy-dXzMpuwn-g', 'PRd6GDvCQJaPYIbRCbnzmQ'];
  const otherIds = ['Vv_ZRh7mT16EMj24gWNgVw']

  allPeople.forEach((person) => {
    if (person && person.positionitem) {
      if (person.positionitem.id && otherIds.includes(person.positionitem.id)) {
        otherMembers.push(person);
      } else if (person.positionitem.id && councilIds.includes(person.positionitem.id)) {
        councilMembers.push(person);
      } else if (person.positionitem.id && boardIds.includes(person.positionitem.id)) {
        boardMembers.push(person);
      }
    }
  })

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
                {boardMembers.length > 0 && (
                    <BoardMembers
                        title='Zarząd'
                        members={boardMembers}
                    />
                )}
                {councilMembers.length > 0 && (
                    <BoardMembers
                        title='Rada fundacji'
                        members={councilMembers}
                    />
                )}
                {otherMembers.length > 0 && (
                    <BoardMembers
                        title='Team'
                        members={otherMembers}
                    />
                )}
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
