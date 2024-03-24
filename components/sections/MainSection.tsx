/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import data from '@/utils/blogData2'

export const MainSection = () => {
  return (
    <div className='row'>
      <div className='col-xl-7 col-lg-12'>
        {data.slice(0, 1).map((item, i) => (
          <div key={i}>
            <div
              className='card-style-1 hover-up mb-30 wow animate__animated animate__fadeIn'
              data-wow-delay='.0s'
            >
              <div className='card-image'>
                <Link
                  className='link-post'
                  href='/single-sidebar'
                >
                  <img
                    src={`/assets/imgs/page/homepage3/${item.img}`}
                    alt='Genz'
                  />
                  <div className='card-info card-bg-2'>
                    <div className='info-bottom mb-15'>
                      <h4 className='color-white mb-15'>{item.title}</h4>
                      <div className='box-author'>
                        <img
                          src='assets/imgs/page/homepage3/author.jpg'
                          alt='Genz'
                        />
                        <div className='author-info'>
                          <h6 className='mr-15 color-gray-700'>Jacek</h6>
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
      <div className='col-xl-5 col-lg-12'>
        <div className='box-list-posts'>
          {data.slice(1, 4).map((item, i) => (
            <div
              className='card-list-posts wow animate__animated animate__fadeIn'
              key={i}
              data-wow-delay={`${i / 10}s`}
            >
              <div className='card-image hover-up'>
                <Link href={`/blog/${item.id}`}>
                  <img
                    src={`/assets/imgs/page/healthy/${item.img}`}
                    alt='Genz'
                  />
                </Link>
              </div>
              <div className='card-info'>
                <Link
                  className='btn btn-tag bg-gray-800 hover-up'
                  href={`/blog/${item.id}`}
                >
                  {item.category}
                </Link>
                <Link href={`/blog/${item.id}`}>
                  <h4 className='mt-15 mb-20 color-white'>{item.title}</h4>
                </Link>
                <p className='color-gray-500'>{item.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
