'use server'

import React from 'react'
import Image from 'next/image'
import { base64Blur } from './base64ImageBlur'
import {getInitHomePageData} from "@/lib/api/homePage";

export const PortfolioFilter = ({ col }: { col: number }) => {

  const { allFocusonemotionitems, isLoading, error } = getInitHomePageData();

  if (isLoading) return <div />;
  if (error || !allFocusonemotionitems) return <div />;


  return (
    <>
      <div className='mt-20 mb-50'>
        <div className='row'>
          {allFocusonemotionitems.map((item) => (
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
                        src={item.photo.url}
                        priority
                        className='coverFilter'
                        placeholder='blur'
                        blurDataURL={base64Blur}
                      />
                    </div>
                    <div className='info-bottom mb-15'>
                      <h3 className='color-white mb-10 text-center'>{item.name}</h3>
                      <p className='color-gray-500 font-sm-clamp text-center'>{item.description}</p>
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
