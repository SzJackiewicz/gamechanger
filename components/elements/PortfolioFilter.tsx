'use server'

import Link from 'next/link'
import React from 'react'

const portfolio = [
  {
    name: 'Random title',
    category: ['all', 'web', 'motion'],
    img: 'img1.png',
  },
  {
    name: 'Random title',
    category: ['all', 'graphic', 'web'],
    img: 'img2.png',
  },
  {
    name: 'Random title',
    category: ['all', 'graphic', 'motion '],
    img: 'img3.png',
  },
  {
    name: 'Random title',
    category: ['all', 'motion', 'mobile'],
    img: 'img4.png',
  },
  {
    name: 'Random title',
    category: ['all', 'web', 'graphic'],
    img: 'img5.png',
  },
  {
    name: 'Random title',
    category: ['all', 'mobile'],
    img: 'img5.png',
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
                    className='card-style-1 hover-up mb-30'
                    data-wow-delay='.0s'
                  >
                    <div className='card-image'>
                      <Link
                        className='link-post'
                        href='#'
                      >
                        <img
                          src={`/assets/imgs/imageBlur/blur.webp`}
                          alt='wspierający'
                        />
                        <div className='card-info card-bg-2'>
                          <div className='info-bottom mb-15'>
                            <h3 className='color-white mb-10'>{item.name}</h3>
                            <p className='color-gray-500 text-sm'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat vitae risus eget maximus.
                              Pellentesque suscipit
                            </p>
                          </div>
                        </div>
                      </Link>
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
