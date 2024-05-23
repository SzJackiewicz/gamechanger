import { SupportUsLayout } from '@/components/pagesLayout/SupportUsLayout/SupportUsLayout'
import React from 'react'

const articleText =
  'Naszą misją jest promowanie zdrowia psychicznego poprzez sport i w obszarze sportu. W świecie, gdzie presja zwycięstwa często przytłacza, istnieje miejsce dla każdego, kto szuka równowagi. Nie chcemy, żeby ktokolwiek został sam w swojej walce. Przełamujemy tabu, dodajemy otuchy i odwagi. Mówimy otwarcie o problemach i szukamy rozwiązań. Wierzymy, że sport i aktywność są ważnymi elementami w pracy nad równowagą mentalną i psychiczną człowieka oraz mogą być platformą komunikacji i nośnikiem przekazu. Sport może stać się naszym sprzymierzeńcem w najważniejszej walce - o samego siebie. Razem tworzymy środowisko, w którym każdy może czuć się bezpiecznie, rozmawiając o swoich uczuciach, problemach, wyzwaniach i sukcesach. Działania realizujemy m.in. poprzez kampanie propagujące zdrowie psychiczne; organizację form edukacji o zdrowiu psychicznym z wykorzystaniem zajęć sportowych; organizację i wsparcie akcji promujących i popularyzujących wolontariat, zasady wzajemnej pomocy, tolerancję; działalność oświatową i edukacyjną. Dołącz do nas i zostań partnerem tej zmiany!'

export default function SupportUsPage() {
  return (
    <SupportUsLayout
      articleText={articleText}
      pricingComponent
      img='/assets/imgs/page/wesprzyj-nas/wesprzyj.webp'
    />
  )
}
