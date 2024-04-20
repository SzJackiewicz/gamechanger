'use server'

import Link from 'next/link'
import AditionalPosts from './AditionalPosts'
import { heroSectionData } from '@/public/assets/data/heroSection/heroSectionData'

export const MainSection = () => {
  return (
    <div className='row'>
      <div className='col-xxl-6 col-xl-7 align-content-center col-md-12 my-lg-4 my-xl-0'>
        <div
          className='card-style-1 hover-up wow animate__animated animate__fadeIn'
          data-wow-delay='.0s'
        >
          <div className='card-image'>
            <Link
              className='link-post'
              href={`/aktualnosci/${heroSectionData[0].id}`}
            >
              <img
                src={`${heroSectionData[0].cover}`}
                alt='Article main cover'
                className='img-opacity'
              />
              <div className='img-backdrop' />
              <div className='card-info card-bg-2'>
                <div className='info-bottom mb-15'>
                  <h4 className='color-white mb-15'>{heroSectionData[0].title}</h4>
                  <h6 className='color-white mb-15'>{heroSectionData[0].subtitle}</h6>
                  <div className='box-author'>
                    <div className='author-info'>
                      <span className='color-gray-100 text-md'>{heroSectionData[0].author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='col-xxl-6 col-xl-5 col-md-12 my-sm-4 my-md-4 my-lg-0 '>
        <div className='box-list-posts'>
          <AditionalPosts />
        </div>
      </div>
    </div>
  )
}
