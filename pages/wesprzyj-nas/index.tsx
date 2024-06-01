import { SupportUsLayout } from '@/components/pagesLayout/SupportUsLayout/SupportUsLayout'
import React from 'react'

const articleText =
  'Otrzymane wsparcie pozawala realizować naszą misję. Z każdą darowizną na cele statutowe stajesz się partnerem zmiany i razem z nami dążysz do naszego celu – upowszechnienia dbania o zdrowie psychiczne i normalizację dbania o siebie w zdrowiu psychicznym przy udziale sportu.'

export default function SupportUsPage() {
  return (
    <SupportUsLayout
      articleText={articleText}
      pricingComponent
      img='/assets/imgs/page/wesprzyj-nas/joinus.png'
    />
  )
}
