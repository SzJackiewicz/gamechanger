'use server'

import Link from 'next/link'
import data from '@/utils/blogData2'
import AditionalPosts from './AditionalPosts'

export const MainSection = () => {
  return (
    <div className='row'>
      <div className='col-xxl-6 col-xl-7 align-content-center col-md-12'>
        {data &&
          data.slice(0, 1).map((item, i) => (
            <div key={i}>
              <div
                className='card-style-1 hover-up wow animate__animated animate__fadeIn'
                data-wow-delay='.0s'
              >
                <div className='card-image'>
                  <Link
                    className='link-post'
                    href='/single-sidebar'
                  >
                    <img
                      src={`/assets/imgs/page/homepage3/${item.img}`}
                      alt='Article main cover'
                    />
                    <div className='card-info card-bg-2'>
                      <div className='info-bottom mb-15'>
                        <h4 className='color-white mb-15'>{item.title}</h4>
                        <h6 className='color-white mb-15'>Podtytuł Podtytuł Podtytuł Podtytuł Podtytuł</h6>
                        <div className='box-author'>
                          <div className='author-info'>
                            <span className='color-gray-700 text-sm'>{item.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className='col-xxl-6 col-xl-5 col-md-12'>
        <div className='box-list-posts gap-4'>
          <AditionalPosts />
        </div>
      </div>
    </div>
  )
}
