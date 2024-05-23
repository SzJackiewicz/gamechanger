export interface ButtonData {
  slug: string
  title: string
  price?: string
  buttonTitle: string
  cycle: boolean
}

export const buttonsDataMainPage: ButtonData[] = [
  {
    slug: 'https://donate.stripe.com/3cs03M0RCfh9cX6dQQ',
    title: 'Wsparcie jednorazowe',
    price: '25,00',
    buttonTitle: 'Przekaż darowiznę',
    cycle: false,
  },
  {
    slug: 'https://donate.stripe.com/3cs03M0RCfh9cX6dQQ',
    title: 'Wsparcie cykliczne',
    price: '25,00',
    buttonTitle: 'Przekaż darowiznę',
    cycle: true,
  },
  {
    slug: '/wesprzyj-nas',
    title: 'Inne formy wsparcia',
    buttonTitle: 'Sprawdź',
    cycle: false,
  },
]

export const buttonsDataSupportPage: ButtonData[] = [
  {
    slug: 'https://donate.stripe.com/3cs03M0RCfh9cX6dQQ',
    title: 'Wsparcie jednorazowe',
    price: '25,00 zł',
    buttonTitle: 'Przekaż darowiznę',
    cycle: false,
  },
  {
    slug: 'https://donate.stripe.com/3cs03M0RCfh9cX6dQQ',
    title: 'Wsparcie jednorazowe',
    price: '50,00 zł',
    buttonTitle: 'Przekaż darowiznę',
    cycle: false,
  },
  {
    slug: 'https://donate.stripe.com/3cs03M0RCfh9cX6dQQ',
    title: 'Wsparcie jednorazowe',
    price: '100,00 zł',
    buttonTitle: 'Przekaż darowiznę',
    cycle: false,
  },
  {
    slug: 'https://donate.stripe.com/3cs03M0RCfh9cX6dQQ',
    title: 'Wsparcie jednorazowe',
    price: 'dowolna kwota',
    buttonTitle: 'Przekaż darowiznę',
    cycle: false,
  },
  {
    slug: 'https://donate.stripe.com/3cs03M0RCfh9cX6dQQ',
    title: 'Wsparcie cykliczne',
    price: '25,00 zł',
    buttonTitle: 'Przekaż darowiznę',
    cycle: true,
  },
  {
    slug: 'https://donate.stripe.com/3cs03M0RCfh9cX6dQQ',
    title: 'Wsparcie cykliczne',
    price: '50,00 zł',
    buttonTitle: 'Przekaż darowiznę',
    cycle: true,
  },
  {
    slug: 'https://donate.stripe.com/3cs03M0RCfh9cX6dQQ',
    title: 'Wsparcie cykliczne',
    price: '100,00 zł',
    buttonTitle: 'Przekaż darowiznę',
    cycle: true,
  },
  {
    slug: 'https://donate.stripe.com/3cs03M0RCfh9cX6dQQ',
    title: 'Wsparcie cykliczne',
    price: 'dowolna kwota',
    buttonTitle: 'Przekaż darowiznę',
    cycle: false,
  },
]
