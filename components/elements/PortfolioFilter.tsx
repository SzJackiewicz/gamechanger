'use server'

import React from 'react'
import Image from 'next/image'

const portfolio = [
  {
    name: 'Aaron Cel',
    subtitle:
      'Były koszykarz. Mistrz Polski, wicemistrz (3 krotnie), zdobywca brązowego medalu oraz Mistrz Francji. Zagrał w 108 meczach reprezentacji Polski z którą zagrał na Mistrzostwach Europy i Świata.    ',
    img: '/assets/imgs/page/focusOnEmotions/Aaron.png',
  },
  {
    name: 'Bartosz Zmarzlik',
    subtitle:
      'Żużlowiec. Indywiduany (4 krotnie) i dryżynowo (3 krotnie) Mistrz Świata. Jeszcze przed 30 rokiem życia został jednym z najlepszych zawodników w historii tej dyscypliny.',
    img: '/assets/imgs/page/focusOnEmotions/Bartosz.png',
  },
]

export const PortfolioFilter = ({ col }: { col: number }) => {
  return (
    <>
      <div className='mt-20 mb-50'>
        <div className='row'>
          {portfolio.map((item) => (
            <div
              className={`col-lg-${col}`}
              key={item.name}
            >
              <div
                className='project'
                data-category='web motion'
              >
                <div className='item-content'>
                  <div
                    className='card-style-focusonemotions hover-up mb-30'
                    data-wow-delay='.0s'
                  >
                    <div className='card-image items-center justify-center'>
                      <Image
                        width={300}
                        height={400}
                        alt='cover'
                        src={item.img}
                        priority
                        className='coverFilter'
                        placeholder='blur'
                        blurDataURL='/assets/imgs/imageBlur/blur.webp'
                      />
                    </div>
                    <div className='info-bottom mb-15'>
                      <h3 className='color-white mb-10 text-center'>{item.name}</h3>
                      <p className='color-gray-500 font-sm-clamp text-center'>{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
