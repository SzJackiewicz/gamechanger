import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { SupportUs } from '@/components/sections/SupportUs/SupportUs'
import { buttonsDataMainPage } from '@/components/sections/SupportUs/data'
import { PartnersLogs } from '@/components/sections/PartnersLogs'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { H1, H2, P, Li } from '@/components/elements/MdxComponents'

const exampleArticle = {
  title: 'Maj miesiącem świadomości zdrowia psychicznego',
  id: 0,
  cover: '/assets/data/heroSection/img/1.jpeg',
  article: `
  # Świadomość Szczęścia: Klucz do Lepszego Życia

  W dzisiejszym zabieganym świecie, w którym często poświęcamy uwagę wyzwaniom i problemom, łatwo zapomnieć o istocie szczęścia w życiu. Świadomość szczęścia odgrywa jednak kluczową rolę w naszym codziennym doświadczeniu i może przynieść liczne korzyści dla naszego zdrowia psychicznego i ogólnego samopoczucia.
  
  ## Co to znaczy być świadomym szczęścia?
  
  To bardziej niż tylko chwilowa radość czy przyjemność. Świadomość szczęścia to umiejętność dostrzegania i doceniania pozytywnych aspektów życia nawet w trudnych sytuacjach. To zdolność do czerpania radości z drobnych rzeczy i doświadczeń codzienności, a także do utrzymywania wdzięczności za to, co mamy.
  
  Badania naukowe potwierdzają, że praktykowanie świadomości szczęścia może prowadzić do poprawy zdrowia psychicznego i emocjonalnego. Ludzie, którzy regularnie praktykują wdzięczność, wykazują niższy poziom stresu, lepszą odporność na negatywne wydarzenia i wyższe poczucie satysfakcji z życia.
  
  ## Jak rozwijać świadomość szczęścia w życiu?
  
  Jednym z kluczowych elementów jest praktykowanie uważności. Uważność, czyli świadomość obecnego momentu bez oceniania, pozwala nam zauważać i doceniać piękno i radość w otaczającym nas świecie. Ćwiczenia takie jak medytacja, prowadzenie dziennika wdzięczności czy też po prostu zatrzymywanie się na chwilę, aby cieszyć się otaczającym nas życiem, mogą pomóc nam rozwijać tę umiejętność.
  
  ## Budowanie relacji społecznych
  
  Budowanie relacji społecznych i wspieranie innych ludzi może przynieść nam wiele radości i poczucia spełnienia. Dzielenie się swoim czasem, uwagą i dobrocią może sprawić, że poczujemy się bardziej połączeni z innymi i docenieni za nasz wkład.
  
  ## Świadomość szczęścia to proces
  
  Warto również pamiętać, że świadomość szczęścia to proces, który wymaga praktyki i zaangażowania. W dzisiejszym zabieganym świecie łatwo zapomnieć o tym, co naprawdę się liczy, ale dzięki regularnej praktyce uważności i wdzięczności możemy odkryć klucz do pełniejszego i bardziej satysfakcjonującego życia.
  
  ## Podsumowanie
  
  Świadomość szczęścia w życiu to umiejętność dostrzegania i doceniania pozytywnych aspektów życia nawet w trudnych sytuacjach. Poprzez praktykowanie uważności, wdzięczności i budowanie relacji społecznych możemy rozwijać tę umiejętność i czerpać większą radość i satysfakcję z naszego codziennego doświadczenia.
  `,
}

const BlogDetails = () => {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null)

  React.useEffect(() => {
    const serializeMDX = async () => {
      const mdx = await serialize(exampleArticle.article)
      setMdxSource(mdx)
    }
    serializeMDX()
  }, [])

  if (!mdxSource) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <div className='cover-home3'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-1' />
            <div className='col-xl-12 col-lg-12'>
              <div className='row mt-50 align-items-end'>
                <div className='col-lg-8 m-auto text-center'>
                  <h3 className='color-linear font-xl-clamp'>{exampleArticle?.title || 'Tytuł artykułu'}</h3>
                </div>
              </div>
              <div className='mt-30'>
                <div className='mb-3 center-flex w-75 h-75 m-auto '>
                  <img
                    src={`${exampleArticle?.cover}`}
                    alt='cover'
                  />
                </div>
                <div
                  className='col-xl-12 col-lg-12 col-md-9 m-auto p-1'
                  data-wow-delay='.2s'
                >
                  <div
                    className='content-detail'
                    data-wow-delay='.3s'
                  >
                    <MDXRemote
                      {...mdxSource}
                      components={{ h1: H1, h2: H2, p: P, li: Li }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SupportUs buttonsData={buttonsDataMainPage} />
          <PartnersLogs />
        </div>
      </div>
    </Layout>
  )
}

export default BlogDetails
